const Champion = ({ champion }) => {
  const { name, icon, games, wins, losses, winrate, kda } = champion;

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
    <>
      {/* <div className="flex-col hidden text-2xs">
        <div className="mb-1.5 overflow-hidden rounded-full size-8 aspect-square">
          <img
            src={icon}
            alt={name}
            loading="lazy"
            className="object-cover rounded-full pointer-events-none bg-main-3 size-8 aspect-square scale-115"
          />
        </div>

        <span className="text-center text-main-6">
          {((games / 5) * 100).toFixed(0)}%
        </span>
      </div> */}

      <div className="flex items-center gap-2 max-500:text-3xs text-2xs max-1126:flex-row-reverse">
        <div className="overflow-hidden rounded-full max-500:size-6 size-7 aspect-square">
          <img
            src={icon}
            alt={name}
            loading="lazy"
            className="object-cover bg-black rounded-full pointer-events-none size-7 max-500:size-6 aspect-square scale-115"
          />
        </div>

        <div className="flex flex-col max-1126:text-end max-500:gap-0.5">
          <span className={`font-medium ${kdaColor}`}>
            {kda === "Perfect" ? kda : `${kda}:1`} KDA
          </span>

          <div>
            <span className="text-blue">{wins}W</span>{" "}
            <span className="text-red">{losses}L</span>{" "}
            <span className="text-main-6">{winrate.toFixed(0)}%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Champion;

{
  /* <div className="flex items-center justify-between p-2 bg-main-1">
<div className="flex w-[120px] gap-2">
  <div className="overflow-hidden rounded-full size-8 min-size-8 aspect-square">
    <img
      src={icon}
      alt={name}
      loading="lazy"
      className="object-cover bg-black rounded-full pointer-events-none size-8 min-size-8 aspect-square scale-115"
    />
  </div>

  <div className="flex flex-col gap-0.5 text-2xs text-main-6">
    <span className="text-xs text-main-text">{name}</span>

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

<div className="flex flex-col items-center w-24 text-center gap-0.5">
  <span className={`font-medium text-xs ${kdaColor}`}>
    {kda === "Perfect" ? kda : `${kda}:1`} KDA
  </span>

  <div className="text-2xs text-main-6">
    <span>{killsPerGame}</span>
    {" / "}
    <span className="text-red">{deathsPerGame}</span>
    {" / "}
    <span>{assistsPerGame}</span>
  </div>
</div>

<div className="flex flex-col items-end w-[88px] text-xs text-end gap-0.5">
  <div>
    <span className="font-medium text-blue">{wins}W</span>{" "}
    <span className="font-medium text-red">{losses}L</span>{" "}
    <span className="text-main-6">{winrate.toFixed(0)}%</span>
  </div>

  <span className="text-2xs text-main-6">{games} Played</span>
</div>
</div> */
}
