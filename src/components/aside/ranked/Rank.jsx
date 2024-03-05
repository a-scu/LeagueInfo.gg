export default function Rank({ queue, data }) {
  if (!data)
    return (
      <div className="flex flex-col items-center flex-1 gap-2 p-2 bg-main-1">
        <span className="text-xs text-main-text">{queue}</span>

        <div className="flex flex-col items-center w-full gap-2">
          <div className="border-4 rounded-full size-16 aspect-square bg-main-3 border-main-2" />

          <div className="flex flex-col items-center gap-1">
            <span className="text-sm text-main-6">Unranked</span>
            <span className="text-xs text-main-6">···</span>
            <span className="text-xs text-main-6">···</span>
          </div>
        </div>
      </div>
    );

  const { rank, tier, icon, wins, losses, points, winrate } = data;

  return (
    <div className="flex flex-col items-center flex-1 gap-2 p-2 bg-main-1">
      <span className="text-xs text-main-text">{queue}</span>

      <div className="flex flex-col items-center w-full gap-2">
        <img
          src={icon}
          alt=""
          className="object-contain p-1 border-4 rounded-full size-16 aspect-square bg-main-3 border-main-2"
        />

        <div className="flex flex-col items-center">
          <span className="text-sm text-main-text">
            {tier[0]}
            {tier.slice(1).toLowerCase()} {rank}
          </span>

          <span className="text-xs text-main-6">LP: {points}</span>

          <div>
            <span className="text-xs font-medium text-blue">{wins}W</span>{" "}
            <span className="text-xs font-medium text-red">{losses}L</span>{" "}
            <span className="text-xs text-main-6">{winrate.toFixed(0)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
