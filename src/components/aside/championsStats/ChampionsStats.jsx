import QueueType from "./QueueType";

import ArrowDown from "@/components/icons/ArrowDown";

import { getKda, getWinRate } from "@/helpers/tools";

const ChampionsStats = ({ champions }) => {
  const getKdaColor = (kda) => {
    if (kda < 3) {
      return "text-main-6";
    } else if (kda >= 3 && kda < 5) {
      return "text-teal";
    } else {
      return "text-orange";
    }
  };

  const getWinrateColor = (winrate) => {
    if (winrate >= 60) {
      return "text-red";
    } else {
      return "text-main-6";
    }
  };

  return (
    <div className="flex flex-col gap-px overflow-hidden 800:rounded">
      <QueueType />

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
            }) => {
              const kda = getKda(kills, deaths, assists);
              const kdaColor = getKdaColor(kda);
              const winrate = getWinRate(wins, losses);
              const winrateColor = getWinrateColor(winrate);

              return (
                <div
                  key={champName}
                  className="flex items-center justify-between gap-1 p-2 bg-main-1"
                >
                  <div className="flex flex-1 gap-2 max-500:justify-start max-500:text-start max-sm:justify-center max-sm:text-center">
                    <div className="overflow-hidden rounded-full size-7-5 min-size-7-5 aspect-square">
                      <img
                        src={champIcon}
                        alt=""
                        loading="lazy"
                        className="object-cover bg-black rounded-full pointer-events-none size-7-5 min-size-7-5 aspect-square scale-115"
                      />
                    </div>

                    <div className="flex flex-col gap-0.5 500:w-16 items-start text-start">
                      <span className={`text-2xs text-main-6 ${winrateColor}`}>
                        {winrate.toFixed(0)}%
                      </span>
                      <span className="text-2xs text-main-5">
                        {games} Played
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center flex-1 text-center gap-0.5">
                    <span className={`font-medium text-2xs ${kdaColor}`}>
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

                  <div className="flex flex-col flex-1 gap-0.5 max-500:justify-end max-500:text-end justify-center text-center sm:items-end sm:text-end">
                    <span className="text-2xs text-main-5">
                      CS {(cs / games).toFixed(0)} (
                      {(cs / (totalTimePlayed / 60)).toFixed(1)})
                    </span>

                    <span className="text-2xs text-main-5">
                      Vision {(vision / games).toFixed(0)} (
                      {(vision / (totalTimePlayed / 60)).toFixed(1)})
                    </span>
                  </div>
                </div>
              );
            }
          )}
      </div>

      <button className="flex items-center justify-center gap-1 px-2 py-2 text-xs text-center bg-main-2 text-main-6">
        Show More <ArrowDown className="-rotate-90 size-3" />
      </button>
    </div>
  );
};

export default ChampionsStats;
