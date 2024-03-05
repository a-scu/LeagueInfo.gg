export const formatNumber = (number) => {
  if (number < 1000) {
    return number;
  } else if (number < 10000) {
    return (number / 1000).toFixed(3).replace(".", ",");
  } else if (number < 1000000) {
    return (number / 1000).toFixed(3).replace(".", ",");
  }
};

export const getWinRate = (wins, losses) => {
  let games = wins + losses;

  if (!games || !wins) return 0;
  if (!losses) return 100;

  return (wins / games) * 100;
};

export const getKda = (kills, deaths, assists) => {
  let takedowns = kills + assists;
  if (!deaths) return "Perfect";
  return (takedowns / deaths).toFixed(2);
};

export const getPKill = (kills, assists, teamKills) => {
  let takedowns = kills + assists;

  if (!takedowns) return 0;
  if (takedowns === teamKills) return 100;

  return ((takedowns / teamKills) * 100).toFixed(0);
};
