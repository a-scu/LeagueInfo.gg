import ArrowDown from "@/components/icons/ArrowDown";
import { getKda, getWinRate } from "@/helpers/tools";

const RankedStats = ({ champions }) => {
  return (
    <div className="flex flex-col gap-px overflow-hidden 800:rounded">
      <div className="flex gap-1 p-1 bg-main-1">
        <button className="max-450:flex-[1.5] max-sm:flex-1 flex max-1126:flex-1 1126:flex-[1.5] items-center justify-center py-1 text-center text-white rounded text-2xs 500:text-xs bg-main-4">
          S2024 S1
        </button>

        <button className="flex items-center justify-center flex-1 py-1 text-center text-white border rounded max-sm:flex-1 text-2xs 500:text-xs border-main-4 hover:bg-main-2">
          Solo
        </button>

        <button className="flex items-center justify-center flex-1 py-1 text-center text-white border rounded max-sm:flex-1 text-2xs 500:text-xs border-main-4 hover:bg-main-2">
          Flex
        </button>
      </div>

      <div className="flex flex-col grid-cols-2 gap-px max-sm:flex max-1126:grid">
        {champions
          .slice(0, 6)
          .map(
            ({
              totalTimePlayed,
              games,
              wins,
              losses,
              champName,
              champIcon,
              kills,
              deaths,
              assists,
              cs,
              vision,
              position,
            }) => {
              const kda = getKda(kills, deaths, assists);

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

              const winrate = getWinRate(wins, losses);

              return (
                <div
                  key={champName}
                  className="flex items-center justify-between gap-1 p-2 bg-main-1"
                >
                  <div className="max-450:flex-[1.5] flex max-sm:flex-1 w-[120px] 1126:flex-[1.5] gap-2">
                    <div className="overflow-hidden rounded-full size-[30px] min-size-[30px] 500:size-8 500:min-size-8 aspect-square">
                      <img
                        src={champIcon}
                        alt={champName}
                        loading="lazy"
                        className="object-cover bg-black rounded-full pointer-events-none size-[30px] min-size-[30px] 500:size-8 500:min-size-8 aspect-square scale-115"
                      />
                    </div>

                    <div className="flex flex-col gap-0.5 text-2xs text-main-5">
                      <span className="font-medium dark:font-normal text-2xs 500:text-xs text-main-text">
                        {champName}
                      </span>

                      {position === "UTILITY" ? (
                        <span>
                          Vision {(vision / games).toFixed(0)} (
                          {(vision / (totalTimePlayed / 60)).toFixed(1)})
                        </span>
                      ) : (
                        <span>
                          CS {(cs / games).toFixed(0)} (
                          {(cs / (totalTimePlayed / 60)).toFixed(1)})
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="max-sm:flex-1 flex 1126:flex-1 flex-col items-center w-[120px] text-center gap-0.5">
                    <span
                      className={`font-medium text-2xs 500:text-xs ${kdaColor}`}
                    >
                      {kda === "Perfect" ? kda : `${kda}:1`} KDA
                    </span>

                    <div className="text-2xs text-main-5">
                      <span>{(kills / games).toFixed(1)}</span>
                      {" / "}
                      <span>{(deaths / games).toFixed(1)}</span>
                      {" / "}
                      <span>{(assists / games).toFixed(1)}</span>
                    </div>
                  </div>

                  <div className="max-sm:flex-1 1126:flex-1 flex flex-col items-end w-16 text-2xs 500:text-xs text-end gap-0.5">
                    <span className="font-medium text-2xs 500:text-xs text-main-6">
                      {winrate.toFixed(0)}%
                    </span>

                    <div className="text-2xs">
                      <span className="text-main-5">{games} Played</span>{" "}
                    </div>
                  </div>
                </div>
              );
            }
          )}
      </div>

      <button className="flex items-center justify-end gap-1 px-2 py-2 text-end text-2xs 500:text-xs bg-main-1 text-main-6">
        Show More <ArrowDown className="size-3" />
      </button>
    </div>
  );
};

export default RankedStats;
