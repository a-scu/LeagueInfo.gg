import getParticipant from "./getParticipant";

import queuesJson from "@assets/data/queues.json";

// #region PROCESS GAME DATA

const processGameData = async (puuid, game, jsons, rankedData, ddragonVersion) => {
  const { info, metadata } = game;
  const { teams, gameDuration, participants } = info;

  let summoner = participants.find((participant) => participant.puuid === puuid);

  const summonerTeamObjectives = teams.find(({ teamId }) => teamId === summoner.teamId).objectives;

  const summonerTeam = {
    cs: 0,
    gold: 0,
    kills: 0,
    damage: 0,
    deaths: 0,
    assists: 0,
    visionScore: 0,
    participants: [],
    team: "summoner",
    win: summoner.win,
    teamId: summoner.teamId,
    objectives: summonerTeamObjectives,
  };

  const opponentTeamObjectives = teams.find(({ teamId }) => teamId === summoner.teamId).objectives;

  const opponentTeam = {
    cs: 0,
    gold: 0,
    kills: 0,
    damage: 0,
    deaths: 0,
    assists: 0,
    visionScore: 0,
    participants: [],
    team: "opponent",
    win: !summoner.win,
    objectives: opponentTeamObjectives,
    teamId: summoner.teamId === 100 ? 200 : 100,
  };

  const gameStats = {
    gameTopCS: 0,
    gameTopGold: 0,
    gameTopKills: 0,
    gameTopDamage: 0,
    gameTopDeaths: 0,
    gameTopAssists: 0,
    gameTopDamageTaken: 0,
    gameTopVisionScore: 0,
  };

  for (let index = 0; index < participants.length; index++) {
    let participant = participants[index];

    const participantTeam = participant.win === summoner.win ? summonerTeam : opponentTeam;

    participant = await getParticipant(
      participantTeam,
      participant,
      gameDuration,
      puuid,
      rankedData,
      jsons
    );

    participantTeam.cs += participant.cs;
    participantTeam.gold += participant.gold;
    participantTeam.kills += participant.kills;
    participantTeam.deaths += participant.deaths;
    participantTeam.assists += participant.assists;
    participantTeam.visionScore += participant.visionScore;
    participantTeam.damage += participant.damageToChampions;
    participantTeam.participants.push(participant);

    if (participant.cs > gameStats.gameTopCS) gameStats.gameTopCS = participant.cs;

    if (participant.gold > gameStats.gameTopGold) gameStats.gameTopGold = participant.gold;

    if (participant.kills > gameStats.gameTopKills) gameStats.gameTopKills = participant.kills;

    if (participant.deaths > gameStats.gameTopDeaths) gameStats.gameTopDeaths = participant.deaths;

    if (participant.assists > gameStats.gameTopAssists)
      gameStats.gameTopAssists = participant.assists;

    if (participant.damageTaken > gameStats.gameTopDamageTaken)
      gameStats.gameTopDamageTaken = participant.damageTaken;

    if (participant.visionScore > gameStats.gameTopVisionScore)
      gameStats.gameTopVisionScore = participant.visionScore;

    if (participant.damageToChampions > gameStats.gameTopDamage)
      gameStats.gameTopDamage = participant.damageToChampions;
  }

  summoner = summonerTeam.participants.find((summoner) => summoner.puuid === puuid);

  summonerTeam.participants = sortParticipants(summonerTeam.participants);
  opponentTeam.participants = sortParticipants(opponentTeam.participants);

  return {
    summoner,
    gameStats,
    summonerTeam,
    opponentTeam,
    gameId: metadata.matchId,
    queue: getQueue(info.queueId),
    gameDurationMiliseconds: info.gameDuration,
    gameAge: getGameAge(info.gameEndTimestamp),
    gameDuration: getFormattedGameDuration(info.gameDuration),
  };
};

// #region SORT PARTICIPANTS

const sortParticipants = (array) => {
  const POSITIONS = {
    TOP: 0,
    JUNGLE: 1,
    MIDDLE: 2,
    BOTTOM: 3,
    UTILITY: 4,
  };

  return array.sort((a, b) => POSITIONS[a.position] - POSITIONS[b.position]);
};

// #region GET QUEUE

const getQueue = (gameQueueId) => {
  const { description } = Object.values(queuesJson).find(({ queueId }) => queueId === gameQueueId);
  return description;
};

// #region GET GAME DURATION

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

// #region GET GAME AGE

const getGameAge = (gameEndTimestamp) => {
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

export default processGameData;
