export default function Rank({ queue, fetchingRankedData, rankData }) {
  if (fetchingRankedData)
    return (
      <div className="bg-gray-1 flex flex-1">
        <div className=" flex flex-col flex-1 gap-1 p-2 animate-pulse">
          <div className="h-4 flex items-center justify-center max-500:h-3.5">
            <div className="w-10 bg-gray-2 rounded-full max-500:h-1.5 h-2" />
          </div>

          <div className="flex flex-col items-center w-full gap-1">
            <div className="bg-gray-2 border-4 rounded-full size-16 max-500:size-[60px] aspect-square border-gray-2" />

            <div className="flex flex-col w-full">
              <div className="max-500:h-4 h-5 flex items-center justify-center">
                <div className="w-20 bg-gray-2 rounded-full max-500:h-2 h-2.5" />
              </div>

              <div className="flex flex-col gap-px text-xs text-center max-500:text-2xs text-gray-5">
                <div className="h-4 max-500:h-3.5 flex items-center justify-center">
                  <div className="w-10 bg-gray-2 rounded-full max-500:h-1.5 h-2" />
                </div>

                <div className="h-4 max-500:h-3.5 flex items-center justify-center">
                  <div className="w-10 bg-gray-2 rounded-full max-500:h-1.5 h-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  if (!rankData)
    return (
      <div className="flex flex-col items-center flex-1 gap-1 p-2 bg-gray-1">
        <span className="text-xs max-500:text-2xs text-gray-5 opacity-50">{queue}</span>

        <div className="flex flex-col items-center w-full gap-1 opacity-50">
          <div className="border-4 rounded-full size-16 max-500:size-[60px] aspect-square bg-gray-3 border-gray-2" />

          <div className="flex flex-col items-center">
            <span className="text-sm max-500:text-xs text-gray-5">Unranked</span>

            <div className="flex flex-col items-center gap-px text-xs text-center max-500:text-2xs text-gray-5">
              <span>···</span>
              <span>···</span>
            </div>
          </div>
        </div>
      </div>
    );

  // return (
  //   <div className="bg-gray-1 flex items-center justify-center">
  //     <div className="rotate-90">
  //       <span className="leading-none text-xs text-center text-gray-4">UNRANKED</span>
  //     </div>
  //   </div>
  // );

  const { rank, tier, emblem, wins, losses, points, winrate } = rankData;

  const borderColor =
    tier === "CHALLENGER"
      ? "border-challenger"
      : tier === "GRANDMASTER"
      ? "border-grandmaster"
      : tier === "MASTER"
      ? "border-master"
      : tier === "DIAMOND"
      ? "border-diamond"
      : tier === "EMERALD"
      ? "border-emerald"
      : tier === "PLATINUM"
      ? "border-platinum"
      : tier === "GOLD"
      ? "border-gold"
      : tier === "SILVER"
      ? "border-silver"
      : tier === "BRONZE"
      ? "border-bronze"
      : "border-[#47433f]";

  return (
    <div className="flex flex-col items-center flex-1 gap-1 p-2 bg-gray-1">
      <span className="text-xs max-500:text-2xs text-white">{queue}</span>

      <div className="flex flex-col items-center w-full gap-1">
        <img
          src={emblem}
          alt=""
          className={`object-contain p-1 rounded-full size-16 max-500:size-[60px] aspect-square bg-gray-3 border-gray-4`}
        />

        <div className="flex flex-col items-center">
          <span className="text-sm max-500:text-xs text-white">
            {tier[0]}
            {tier.slice(1).toLowerCase()} {rank}
          </span>

          <span className="mb-px text-xs max-500:text-2xs text-gray-6">LP: {points}</span>

          <div className="text-xs max-500:text-2xs">
            <span className="text-blue font-medium">{wins}W</span>{" "}
            <span className="text-red font-medium">{losses}L</span>{" "}
            <span className="text-gray-6 font-medium">{winrate.toFixed(0)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
