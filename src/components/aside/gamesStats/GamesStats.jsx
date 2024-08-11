import Pie from "./Pie";
import PreferredPositions from "./preferredPositions/PreferredPositions";
import PlayedChampions from "./playedChampions/PlayedChampions";
import { useStore } from "@nanostores/react";
import { $fetchingGamesStats, $gamesStats } from "@/js/store";

const GamesStats = () => {
  const fetchingGamesStats = useStore($fetchingGamesStats);
  const gamesStats = useStore($gamesStats);

  if (fetchingGamesStats)
    return (
      <div className="bg-gray-1 rounded overflow-hidden">
        <div className=" max-360:grid-cols-[100px,40px,100px] gap-x-2 max-500:grid-cols-[100px,102px,100px] grid-cols-[160px,102px,160px] max-1126:justify-evenly max-500:justify-between max-800:rounded-none grid max-1126:gap-2 max-1126:p-2 1126:grid-cols-[1fr,110px] 1126:grid-rows-[fit,fit] animate-pulse">
          <div className="flex flex-col flex-1 gap-2 1126:pl-2 1126:py-2">
            <div className="h-4 max-500:h-3.5 flex items-center w-full">
              <div className="w-full bg-gray-2 rounded-full max-500:h-1.5 h-2" />
            </div>

            <div className="flex items-center h-full gap-2">
              <Pie fetchingGamesStats={fetchingGamesStats} winrate={0} />

              <div className="flex flex-col">
                <div className="500:hidden relative items-center justify-center w-[100px] min-w-[100px] flex mb-1.5">
                  <span className="absolute z-10 text-white text-3xs"></span>

                  <div className="relative flex items-center w-full h-3.5 bg-gray-2 rounded-sm">
                    <div style={{ width: 0 }} className={`h-3.5 bg-blue`} />
                  </div>
                </div>

                <div className="h-4 max-500:h-3.5 flex items-center w-full">
                  <div className="w-20 bg-gray-2 rounded-full max-500:h-1.5 h-2" />
                </div>

                <div className="h-5 flex items-center w-full">
                  <div className="w-14 bg-gray-2 rounded-full h-2.5" />
                </div>

                <div className="h-4 max-500:h-3.5 flex items-center w-full">
                  <div className="w-10 bg-gray-2 rounded-full max-500:h-1.5 h-2" />
                </div>
              </div>
            </div>
          </div>

          <PreferredPositions
            positions={{
              TOP: 0,
              JUNGLE: 0,
              MIDDLE: 0,
              BOTTOM: 0,
              UTILITY: 0,
            }}
            fetchingGamesStats={fetchingGamesStats}
            games={0}
          />

          <PlayedChampions fetchingGamesStats={fetchingGamesStats} />
        </div>
      </div>
    );

  if (!fetchingGamesStats && !gamesStats) return <span>Error fetching recent games</span>;

  if (!gamesStats) return null;
  const { summoner } = gamesStats;
  const {
    games,
    wins,
    losses,
    winrate,
    killsPerGame,
    deathsPerGame,
    assistsPerGame,
    kdaPerGame,
    pKillPerGame,
  } = summoner;

  const kdaColor =
    kdaPerGame < 3
      ? "text-gray-6"
      : kdaPerGame < 4 && kdaPerGame >= 3
      ? "text-teal"
      : kdaPerGame < 5 && kdaPerGame >= 4
      ? "text-kdaBlue"
      : "text-orange";

  return (
    <div className="max-360:grid-cols-[100px,40px,100px] max-500:grid-cols-[100px,102px,100px] grid-cols-[160px,102px,160px] max-1126:justify-evenly max-500:justify-between max-800:rounded-none grid max-1126:gap-2 max-1126:p-2 overflow-hidden rounded 1126:grid-cols-[1fr,110px] 1126:grid-rows-[fit,fit] bg-gray-1">
      <div className="flex flex-col flex-1 gap-2 1126:pl-2 1126:py-2">
        <span className="text-xs text-gray-6 max-500:hidden max-500:text-2xs">
          {games}G {wins}W {losses}L <span className="max-500:hiden">({winrate.toFixed(0)}%)</span>
        </span>

        <span className="500:hidden text-2xs text-gray-6">Recent Games</span>

        <div className="flex items-center h-full gap-2">
          <Pie winrate={winrate} />

          <div className="flex flex-col">
            <div className="500:hidden relative items-center justify-center w-[100px] min-w-[100px] flex mb-1.5">
              <span className="absolute z-10 text-white text-3xs">
                {wins}W {losses}L {winrate}%
              </span>

              <div className="relative flex items-center w-full h-3.5 bg-gray-4 rounded-sm overflow-hidden">
                <div style={{ width: winrate }} className={`h-3.5 bg-blue`} />
              </div>
            </div>

            <div className="text-xs font-medium max-500:text-2xs text-gray-6">
              <span>{killsPerGame}</span>
              {" / "}
              <span className="text-gray-6">{deathsPerGame}</span>
              {" / "}
              <span>{assistsPerGame}</span>
            </div>
            <p className={`text-sm font-medium text-gray-6 ${kdaColor}`}>{kdaPerGame}:1 KDA</p>
            <p className="text-xs max-500:text-2xs text-gray-6">P/Kill {pKillPerGame}%</p>
          </div>
        </div>
      </div>

      <PreferredPositions positions={summoner.positions} games={summoner.games} />

      <PlayedChampions champions={summoner.champions} games={games} />
    </div>
  );
};

export default GamesStats;
