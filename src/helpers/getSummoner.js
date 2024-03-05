import getRanked from "./getRanked";
import getGame from "./getGame";
import getGamesStats from "./getGamesStats";

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

export default async function getSummoner(search) {
  if (!search) throw new Error("Empty search");

  let summoner;

  if (search.includes("-")) {
    const [name, tag] = search.split("-");
    summoner = await getAccountByNameAndTag(name, tag);
    summoner = { ...summoner, ...(await getSummonerByPuuid(summoner.puuid)) };
  } else {
    summoner = await getSummonerByName(search);
    summoner = { ...summoner, ...(await getAccountByPuuid(summoner.puuid)) };
  }

  if (!summoner) throw new Error("Summoner not found");

  const champions = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_API_VERSION}/data/en_US/champion.json`
  );
  const CHAMPIONS = await champions.json();

  const spells = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_API_VERSION}/data/en_US/summoner.json`
  );
  const SPELLS = await spells.json();

  const runes = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_API_VERSION}/data/en_US/runesReforged.json`
  );
  const RUNES = await runes.json();

  const items = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_API_VERSION}/data/en_US/item.json`
  );
  const ITEMS = await items.json();

  return {
    ...summoner,
    name: summoner.gameName,
    tag: summoner.tagLine,
    previousName: summoner.name,
    level: summoner.summonerLevel,
    icon: `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_API_VERSION}/img/profileicon/${summoner.profileIconId}.png`,
    ranked: await getRanked(summoner.id),
    recentGames: await getRecentGames(
      summoner.puuid,
      CHAMPIONS,
      SPELLS,
      RUNES,
      ITEMS
    ),
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

const getRecentGames = async (puuid, CHAMPIONS, SPELLS, RUNES, ITEMS) => {
  const GAMES_TO_FETCH = 20;

  const recentGamesIds = await getRecentGamesIds(puuid, GAMES_TO_FETCH);
  const recentGames = await Promise.all(
    recentGamesIds.map(
      async (gameId) =>
        await getGame(gameId, puuid, CHAMPIONS, SPELLS, RUNES, ITEMS)
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
