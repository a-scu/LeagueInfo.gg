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
    <div className="flex items-center gap-2 text-2xs max-1126:flex-row-reverse">
      <div className="overflow-hidden rounded-full size-7-5 min-size-7-5 aspect-square">
        <img
          src={icon}
          alt={name}
          loading="lazy"
          className="object-cover bg-black rounded-full pointer-events-none size-7-5 min-size-7-5 aspect-square scale-115"
        />
      </div>

      <div className="flex flex-col max-1126:text-end">
        <span className={`font-medium ${kdaColor}`}>
          {kda === "Perfect" ? kda : `${kda}:1`} KDA
        </span>

        <div>
          <span className="text-main-5">{wins}W</span>{" "}
          <span className="text-main-5">{losses}L</span>{" "}
          <span className="text-main-5">{winrate.toFixed(0)}%</span>
        </div>
      </div>
    </div>
  );
};

export default Champion;
