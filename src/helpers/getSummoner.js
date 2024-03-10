import getRanked from "./getRanked";
import getGame from "./getGame";
import getGamesStats from "./getGamesStats";

import { unstable_noStore as noStore } from "next/cache";

// const PLATFORM_ROUTING_VALUES = {
//   BR1: "br1.api.riotgames.com",
//   EUN1: "eun1.api.riotgames.com",
//   EUW1: "euw1.api.riotgames.com",
//   JP1: "jp1.api.riotgames.com",
//   KR: "kr.api.riotgames.com",
//   LA1: "la1.api.riotgames.com",
//   LA2: "la2.api.riotgames.com",
//   NA1: "na1.api.riotgames.com",
//   OC1: "oc1.api.riotgames.com",
//   TR1: "tr1.api.riotgames.com",
//   RU: "ru.api.riotgames.com",
//   PH2: "ph2.api.riotgames.com",
//   SG2: "sg2.api.riotgames.com",
//   TH2: "th2.api.riotgames.com",
//   TW2: "tw2.api.riotgames.com",
//   VN2: "vn2.api.riotgames.com",
// };

// const REGIONAL_ROUTING_VALUES = {
//   AMERICAS: "americas.api.riotgames.com",
//   ASIA: "asia.api.riotgames.com",
//   EUROPE: "europe.api.riotgames.com",
//   SEA: "sea.api.riotgames.com",
// };

// The AMERICAS routing value serves NA, BR, LAN and LAS. The ASIA routing value serves KR and JP. The EUROPE routing value serves EUNE, EUW, TR and RU. The SEA routing value serves OCE, PH2, SG2, TH2, TW2 and VN2.

const API_KEY = process.env.RIOT_API_KEY;
const DDRAGON_API_VERSION = process.env.DDRAGON_API_VERSION;

let SUMMONER, CHAMPIONS, SPELLS, RUNES, ITEMS;

export default async function getSummoner(search) {
  if (!search) throw new Error("Empty search");

  noStore();

  if (search.includes("-")) {
    const [name, tag] = search.split("-");
    SUMMONER = await getAccountByNameAndTag(name, tag);
    SUMMONER = { ...SUMMONER, ...(await getSummonerByPuuid(SUMMONER.puuid)) };
  } else {
    SUMMONER = await getSummonerByName(search);
    SUMMONER = { ...SUMMONER, ...(await getAccountByPuuid(SUMMONER.puuid)) };
  }

  if (!SUMMONER) throw new Error("Summoner not found");

  const champions = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_API_VERSION}/data/en_US/champion.json`
  );
  CHAMPIONS = await champions.json();

  const spells = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_API_VERSION}/data/en_US/summoner.json`
  );
  SPELLS = await spells.json();

  const runes = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_API_VERSION}/data/en_US/runesReforged.json`
  );
  RUNES = await runes.json();

  const items = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_API_VERSION}/data/en_US/item.json`
  );
  ITEMS = await items.json();

  SUMMONER.ranked = await getRanked(SUMMONER.id);
  SUMMONER.recentGames = await getRecentGames(
    SUMMONER.puuid,
    SUMMONER.ranked,
    CHAMPIONS,
    SPELLS,
    RUNES,
    ITEMS
  );

  const rankedGames = getRankedGames(SUMMONER.puuid);

  return {
    ...SUMMONER,
    name: SUMMONER.gameName,
    tag: SUMMONER.tagLine,
    previousName: SUMMONER.name,
    level: SUMMONER.summonerLevel,
    icon: `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_API_VERSION}/img/profileicon/${SUMMONER.profileIconId}.png`,
  };
}

const getAccountByNameAndTag = async (name, tag) => {
  const res = await fetch(
    `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/${tag}?api_key=${API_KEY}`
  );
  return await res.json();
};

const getAccountByPuuid = async (puuid) => {
  const res = await fetch(
    `https://americas.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}?api_key=${API_KEY}`
  );
  return await res.json();
};

const getSummonerByName = async (name) => {
  const res = await fetch(
    `https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${API_KEY}`
  );
  return await res.json();
};

const getSummonerByPuuid = async (puuid) => {
  const res = await fetch(
    `https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${API_KEY}`
  );
  return await res.json();
};

//

const getRecentGames = async (
  puuid,
  ranked,
  CHAMPIONS,
  SPELLS,
  RUNES,
  ITEMS
) => {
  const GAMES_TO_FETCH = 5;

  const recentGamesIds = await getRecentGamesIds(puuid, GAMES_TO_FETCH);
  const recentGames = await Promise.all(
    recentGamesIds.map(
      async (gameId) =>
        await getGame(gameId, puuid, CHAMPIONS, SPELLS, RUNES, ITEMS, ranked)
    )
  );

  return { games: recentGames, stats: getGamesStats(recentGames) };
};

const getRecentGamesIds = async (puuid, GAMES_TO_FETCH) => {
  const res = await fetch(
    `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=${GAMES_TO_FETCH}&api_key=${API_KEY}`
  );
  return await res.json();
};

const getRankedGames = async (puuid) => {
  const COUNT = 100; // Matches to fetch
  const QUEUE = 420; // Solo : 420, flex: 440
  const SEASON_START = 1704898800; // Season start timestamp

  const res = await fetch(
    `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?startTime=${SEASON_START}&queue=${QUEUE}&type=ranked&start=0&count=${COUNT}&api_key=${API_KEY}`
  );
  const ids = await res.json();

  let lastRankedGameEndTimestamp = 0; // Timestamp of the last game fetched

  const GAMES = await Promise.all(
    ids.map(async (gameId) => {
      const res = await fetch(
        `https://americas.api.riotgames.com/lol/match/v5/matches/${gameId}?api_key=${API_KEY}`
      );
      const game = await res.json();

      const { gameDuration, gameEndTimestamp } = game.info;

      const {
        win,
        championId,
        championName,
        kills,
        deaths,
        assists,
        totalMinionsKilled,
        neutralMinionsKilled,
        visionScore,
      } = game.info.participants.find(({ puuid }) => puuid === SUMMONER.puuid);

      if (gameEndTimestamp > lastRankedGameEndTimestamp)
        lastRankedGameEndTimestamp = gameEndTimestamp;

      const cs = totalMinionsKilled + neutralMinionsKilled;

      return {
        gameDuration,
        win,
        champId: championId,
        champName: championName,
        kills,
        deaths,
        assists,
        cs,
        vision: visionScore,
      };
    })
  );

  const CHAMPIONS_PLAYED = getChampionsPlayed(GAMES);

  return CHAMPIONS_PLAYED;
};

const getGames = async ({}) => {
  const res = await fetch(
    `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?startTime=${SEASON_START}&queue=${QUEUE}&type=ranked&start=0&count=${COUNT}&api_key=${API_KEY}`
  );
  const ids = await res.json();

  const GAMES = await Promise.all(
    ids.map(async (gameId) => {
      const res = await fetch(
        `https://americas.api.riotgames.com/lol/match/v5/matches/${gameId}?api_key=${API_KEY}`
      );
      const game = await res.json();

      const { gameDuration, gameEndTimestamp } = game.info;

      const {
        win,
        championId,
        championName,
        kills,
        deaths,
        assists,
        totalMinionsKilled,
        neutralMinionsKilled,
        visionScore,
      } = game.info.participants.find(({ puuid }) => puuid === SUMMONER.puuid);

      if (gameEndTimestamp > lastRankedGameEndTimestamp)
        lastRankedGameEndTimestamp = gameEndTimestamp;

      const cs = totalMinionsKilled + neutralMinionsKilled;

      return {
        gameDuration,
        win,
        champId: championId,
        champName: championName,
        kills,
        deaths,
        assists,
        cs,
        vision: visionScore,
      };
    })
  );
};

const getChampionsPlayed = (GAMES) => {
  const INITIAL_CHAMPION = {
    totalTimePlayed: 0,
    games: 0,
    wins: 0,
    losses: 0,
    champName: "",
    champIcon: "",
    kills: 0,
    deaths: 0,
    assists: 0,
    cs: 0,
    vision: 0,
  };

  const CHAMPIONS_PLAYED = {};

  GAMES.forEach((game) => {
    let CHAMPION;

    if (CHAMPIONS_PLAYED[game.champName]) {
      CHAMPION = CHAMPIONS_PLAYED[game.champName];
    } else {
      const { image } = Object.values(CHAMPIONS.data).find(
        ({ key }) => key === game.champId.toString()
      );
      const champIcon = `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_API_VERSION}/img/champion/${image.full}`;

      CHAMPION = {
        ...INITIAL_CHAMPION,
        champName: game.champName,
        champIcon,
      };
    }

    CHAMPION.totalTimePlayed += game.gameDuration;
    CHAMPION.games += 1;
    game.win ? (CHAMPION.wins += 1) : (CHAMPION.losses += 1);

    CHAMPION.kills += game.kills;
    CHAMPION.deaths += game.deaths;
    CHAMPION.assists += game.assists;
    CHAMPION.cs += game.cs;
    CHAMPION.vision += game.vision;

    CHAMPIONS_PLAYED[game.champName] = CHAMPION;
  });

  return CHAMPIONS_PLAYED;
};
