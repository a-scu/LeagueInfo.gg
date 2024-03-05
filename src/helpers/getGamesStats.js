import { getKda, getPKill, getWinRate } from "./tools";

const getGamesStats = (GAMES) => {
  const STATS = {
    summoner: {
      games: GAMES.length,
      gamesDuration: 0,
      wins: 0,
      losses: 0,
      kills: 0,
      deaths: 0,
      assists: 0,
      cs: 0,
      vision: 0,
      gold: 0,
      positions: {
        TOP: 0,
        JUNGLE: 0,
        MIDDLE: 0,
        BOTTOM: 0,
        UTILITY: 0,
      },
      champions: {},
    },
    summonerTeam: {
      kills: 0,
      assists: 0,
      cs: 0,
      vision: 0,
      gold: 0,
    },
  };

  const SUMMONER = STATS.summoner;
  const SUMMONER_TEAM = STATS.summonerTeam;
  const CHAMPIONS = SUMMONER.champions;

  GAMES.forEach(({ gameDurationMiliseconds, summoner, summonerTeam }) => {
    const {
      champName,
      champIcon,
      win,
      kills,
      deaths,
      assists,
      cs,
      visionScore,
      gold,
      position,
      damageToChampions,
      damageTaken,
    } = summoner;

    win ? SUMMONER.wins++ : SUMMONER.losses++;
    SUMMONER.gamesDuration += gameDurationMiliseconds;

    // Summoner

    SUMMONER.kills += kills;
    SUMMONER.deaths += deaths;
    SUMMONER.assists += assists;
    SUMMONER.cs += cs;
    SUMMONER.vision += visionScore;
    SUMMONER.gold += gold;
    SUMMONER.positions[position] += 1;

    // Team

    SUMMONER_TEAM.kills += summonerTeam.kills;
    SUMMONER_TEAM.assists += summonerTeam.assists;
    SUMMONER_TEAM.cs += summonerTeam.cs;
    SUMMONER_TEAM.vision += summonerTeam.visionScore;
    SUMMONER_TEAM.gold += summonerTeam.gold;

    // Champion

    const initialChampion = {
      name: champName,
      icon: champIcon,
      games: 0,
      gamesDuration: 0,
      wins: 0,
      losses: 0,
      kills: 0,
      deaths: 0,
      assists: 0,
      cs: 0,
      vision: 0,
      gold: 0,
      damage: 0,
      damageTaken: 0,
      position: position,
    };

    const CHAMPION = CHAMPIONS[champName] ?? initialChampion;

    CHAMPION.games += 1;
    win ? (CHAMPION.wins += 1) : (CHAMPION.losses += 1);
    CHAMPION.gamesDuration += gameDurationMiliseconds;
    CHAMPION.kills += kills;
    CHAMPION.deaths += deaths;
    CHAMPION.assists += assists;
    CHAMPION.cs += cs;
    CHAMPION.vision += visionScore;
    CHAMPION.gold += gold;
    CHAMPION.damage += damageToChampions;
    CHAMPION.damageTaken += damageTaken;

    CHAMPIONS[champName] = CHAMPION;
  });

  let wins = SUMMONER.wins;
  let losses = SUMMONER.losses;
  let games = SUMMONER.games;
  let kills = SUMMONER.kills;
  let deaths = SUMMONER.deaths;
  let assists = SUMMONER.assists;

  SUMMONER.winrate = getWinRate(wins, losses);
  SUMMONER.killsPerGame = (kills / games).toFixed(1);
  SUMMONER.deathsPerGame = (deaths / games).toFixed(1);
  SUMMONER.assistsPerGame = (assists / games).toFixed(1);
  SUMMONER.kdaPerGame = getKda(kills, deaths, assists);
  SUMMONER.pKillPerGame = getPKill(kills, assists, SUMMONER_TEAM.kills);

  Object.keys(CHAMPIONS).forEach((key) => {
    const CHAMPION = CHAMPIONS[key];

    let wins = CHAMPION.wins;
    let losses = CHAMPION.losses;
    let games = CHAMPION.games;
    let gamesDuration = CHAMPION.gamesDuration;
    let kills = CHAMPION.kills;
    let deaths = CHAMPION.deaths;
    let assists = CHAMPION.assists;
    let cs = CHAMPION.cs;
    let vision = CHAMPION.vision;

    CHAMPION.winrate = getWinRate(wins, losses);
    CHAMPION.killsPerGame = (kills / games).toFixed(1);
    CHAMPION.deathsPerGame = (deaths / games).toFixed(1);
    CHAMPION.assistsPerGame = (assists / games).toFixed(1);
    CHAMPION.kda = getKda(kills, deaths, assists);
    CHAMPION.csPerGame = (cs / games).toFixed(0);
    CHAMPION.visionPerGame = (vision / games).toFixed(0);
    CHAMPION.csMinPerGame = (cs / (gamesDuration / 60)).toFixed(1);
    CHAMPION.visionMinPerGame = (vision / (gamesDuration / 60)).toFixed(1);
  });

  return STATS;
};

export default getGamesStats;
