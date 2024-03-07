import getParticipant from "./getParticipant";

const getTeams = async (
  teams,
  summonerPuuid,
  participants,
  gameDuration,
  CHAMPIONS,
  SPELLS,
  RUNES,
  ITEMS,
  summonerRanked
) => {
  let summoner = participants.find(({ puuid }) => puuid === summonerPuuid);

  const summonerTeam = {
    win: summoner.win,
    participants: [],
    kills: 0,
    deaths: 0,
    assists: 0,
    cs: 0,
    visionScore: 0,
    gold: 0,
    damage: 0,
    team: "summoner",
    teamId: summoner.teamId,
    objectives: teams.find(({ teamId }) => teamId === summoner.teamId)
      .objectives,
  };
  const opponentTeam = {
    win: !summoner.win,
    participants: [],
    kills: 0,
    deaths: 0,
    assists: 0,
    cs: 0,
    visionScore: 0,
    gold: 0,
    damage: 0,
    team: "opponent",
    teamId: summoner.teamId === 100 ? 200 : 100,
    objectives: teams.find(({ teamId }) => teamId !== summoner.teamId)
      .objectives,
  };

  const gameStats = {
    gameTopKills: 0,
    gameTopDeaths: 0,
    gameTopAssists: 0,
    gameTopDamage: 0,
    gameTopDamageTaken: 0,
    gameTopCS: 0,
    gameTopVisionScore: 0,
    gameTopGold: 0,
  };

  await Promise.all(
    participants.map(async (participant) => {
      const team =
        participant.win === summoner.win ? summonerTeam : opponentTeam;
      participant = await getParticipant(
        team,
        participant,
        gameDuration,
        CHAMPIONS,
        SPELLS,
        RUNES,
        ITEMS,
        summonerPuuid,
        summonerRanked
      );

      team.kills += participant.kills;
      team.deaths += participant.deaths;
      team.assists += participant.assists;
      team.cs += participant.cs;
      team.visionScore += participant.visionScore;
      team.gold += participant.gold;
      team.damage += participant.damageToChampions;
      team.participants.push(participant);

      if (participant.kills > gameStats.gameTopKills)
        gameStats.gameTopKills = participant.kills;

      if (participant.deaths > gameStats.gameTopDeaths)
        gameStats.gameTopDeaths = participant.deaths;

      if (participant.assists > gameStats.gameTopAssists)
        gameStats.gameTopAssists = participant.assists;

      if (participant.damageToChampions > gameStats.gameTopDamage)
        gameStats.gameTopDamage = participant.damageToChampions;

      if (participant.damageTaken > gameStats.gameTopDamageTaken)
        gameStats.gameTopDamageTaken = participant.damageTaken;

      if (participant.cs > gameStats.gameTopCS)
        gameStats.gameTopCS = participant.cs;

      if (participant.visionScore > gameStats.gameTopVisionScore)
        gameStats.gameTopVisionScore = participant.visionScore;

      if (participant.gold > gameStats.gameTopGold)
        gameStats.gameTopGold = participant.gold;
    })
  );

  summoner = summonerTeam.participants.find(
    ({ puuid }) => puuid === summonerPuuid
  );

  const sortParticipants = (array) => {
    const POSITIONS = {
      TOP: 0,
      JUNGLE: 1,
      MIDDLE: 2,
      BOTTOM: 3,
      UTILITY: 4,
    };

    return array.sort((a, b) => {
      return POSITIONS[a.position] - POSITIONS[b.position];
    });
  };

  summonerTeam.participants = sortParticipants(summonerTeam.participants);
  opponentTeam.participants = sortParticipants(opponentTeam.participants);

  return {
    summoner,
    summonerTeam,
    opponentTeam,
    gameStats,
  };
};

export default getTeams;
