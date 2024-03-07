import QUEUES from "@/assets/data/queues.json";

import getTeams from "./getTeams";

const API_KEY = process.env.RIOT_API_KEY;

const getGame = async (
  gameId,
  puuid,
  CHAMPIONS,
  SPELLS,
  RUNES,
  ITEMS,
  summonerRanked
) => {
  const res = await fetch(
    `https://americas.api.riotgames.com/lol/match/v5/matches/${gameId}?api_key=${API_KEY}`
  );
  const { info, metadata } = await res.json();

  const { summoner, summonerTeam, opponentTeam, gameStats } = await getTeams(
    info.teams,
    puuid,
    info.participants,
    info.gameDuration,
    CHAMPIONS,
    SPELLS,
    RUNES,
    ITEMS,
    summonerRanked
  );

  return {
    gameId: metadata.matchId,
    queue: getQueue(info.queueId),
    gameDurationMiliseconds: info.gameDuration,
    gameDuration: getFormattedGameDuration(info.gameDuration),
    gameAge: calculateGameAge(info.gameEndTimestamp),
    summoner,
    summonerTeam,
    opponentTeam,
    gameStats,
  };
};

const getQueue = (gameQueueId) => {
  const { description } = Object.values(QUEUES).find(
    ({ queueId }) => queueId === gameQueueId
  );
  return description;
};

const getFormattedGameDuration = (gameDurationInSeconds) => {
  const hours = Math.floor(gameDurationInSeconds / 3600);
  const minutes = Math.floor((gameDurationInSeconds % 3600) / 60);
  const remainingSeconds = gameDurationInSeconds % 60;

  const string = [];

  if (hours > 0) {
    string.push(`${hours}h`);
  }

  if (minutes > 0) {
    string.push(`${minutes}m`);
  }

  if (remainingSeconds > 0 || string.length === 0) {
    string.push(`${remainingSeconds}s`);
  }

  return string.join(" ");
};

const calculateGameAge = (gameEndTimestamp) => {
  const difference = new Date().getTime() - gameEndTimestamp;
  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let string = "";

  if (days > 0) {
    string = days === 1 ? "A day ago" : `${days} days ago`;
  } else if (hours > 0) {
    string = hours === 1 ? "An hour ago" : `${hours} hours ago`;
  } else if (minutes > 0) {
    string = minutes === 1 ? "A minute ago" : `${minutes} minutes ago`;
  } else {
    string = "Now";
  }

  return string;
};

export default getGame;
