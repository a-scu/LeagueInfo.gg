export default function Rank({ queue, data }) {
  if (!data)
    return (
      <div className="flex flex-col items-center flex-1 gap-1 p-2 bg-main-1">
        <span className="text-xs max-500:text-2xs text-main-6">{queue}</span>

        <div className="flex flex-col items-center w-full gap-1">
          <div className="border-4 rounded-full size-16 max-500:size-14 aspect-square bg-main-3 border-main-2" />

          <div className="flex flex-col items-center">
            <span className="text-sm max-500:text-xs text-main-6">
              Unranked
            </span>

            <div className="flex flex-col items-center gap-px text-xs text-center max-500:text-2xs text-main-6">
              <span>···</span>
              <span>···</span>
            </div>
          </div>
        </div>
      </div>
    );

  const { rank, tier, icon, wins, losses, points, winrate } = data;

  return (
    <div className="flex flex-col items-center flex-1 gap-1 p-2 bg-main-1">
      <span className="text-xs max-500:text-2xs text-main-text">{queue}</span>

      <div className="flex flex-col items-center w-full gap-1">
        <img
          src={icon}
          alt=""
          className="object-contain p-1 border-4 rounded-full size-16 max-500:size-14 aspect-square bg-main-3 border-main-2"
        />

        <div className="flex flex-col items-center">
          <span className="text-sm max-500:text-xs text-main-text">
            {tier[0]}
            {tier.slice(1).toLowerCase()} {rank}
          </span>

          <span className="mb-px text-xs max-500:text-2xs text-main-6">
            LP: {points}
          </span>

          <div className="text-xs max-500:text-2xs">
            <span className="text-blue">{wins}W</span>{" "}
            <span className="text-red">{losses}L</span>{" "}
            <span className="text-main-6">{winrate.toFixed(0)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
