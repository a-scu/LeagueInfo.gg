const Champion = ({ champion }) => {
  const {
    name,
    icon,
    games,
    wins,
    losses,
    winrate,
    killsPerGame,
    deathsPerGame,
    assistsPerGame,
    kda,
    csPerGame,
    csMinPerGame,
    visionPerGame,
    visionMinPerGame,
    position,
  } = champion;

  const getKdaColor = (kda) => {
    if (kda < 3) {
      return "text-main-6";
    } else if (kda >= 3 && kda < 5) {
      return "text-teal";
    } else {
      return "text-orange";
    }
  };

  const kdaColor = getKdaColor(kda);

  return (
    <div className="flex items-center justify-between p-2 text-2xs text-main-6 bg-main-1">
      <div className="flex gap-1 w-28">
        <div className="overflow-hidden rounded-full size-7 min-size-7 aspect-square">
          <img
            src={icon}
            alt={name}
            loading="lazy"
            className="object-cover bg-black rounded-full pointer-events-none size-7 min-size-7 aspect-square scale-115"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-main-text">{name}</span>

          {position === "UTILITY" ? (
            <span>
              Vision {visionPerGame} ({visionMinPerGame})
            </span>
          ) : (
            <span>
              CS {csPerGame} ({csMinPerGame})
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center w-24 text-center">
        <span className={`font-medium ${kdaColor}`}>
          {kda === "Perfect" ? kda : `${kda}:1`} KDA
        </span>

        <div>
          <span>{killsPerGame}</span>
          {" / "}
          <span className="text-red">{deathsPerGame}</span>
          {" / "}
          <span>{assistsPerGame}</span>
        </div>
      </div>

      <div className="flex flex-col items-end w-20 text-end">
        <div className="font-medium">
          <span>{games}G</span> <span className="text-blue">{wins}W</span>{" "}
          <span className="text-red">{losses}L</span>
        </div>

        <span>Win Rate {winrate.toFixed(0)}%</span>
      </div>
    </div>
  );
};

export default Champion;
