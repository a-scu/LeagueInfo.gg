import ExpandButton from "../ExpandButton";
import Pie from "./Pie";
import PreferredPositions from "./preferredPositions/PreferredPositions";
import PlayedChampions from "./playedChampions/PlayedChampions";
import ArrowDown from "@/components/icons/ArrowDown";

const GamesStats = ({ stats }) => {
  const { summoner } = stats;
  const {
    wins,
    losses,
    winrate,
    killsPerGame,
    deathsPerGame,
    assistsPerGame,
    kdaPerGame,
    pKillPerGame,
  } = summoner;

  return (
    <div className="flex flex-col gap-px overflow-hidden rounded max-800:rounded-none">
      <div className="flex flex-col gap-px">
        <div className="flex py-1.5 px-2 justify-between bg-main-1 items-center gap-2">
          <p className="text-xs font-medium text-center 800:text-sm dark:font-normal text-main-text">
            Stats
          </p>

          <div className="flex items-center gap-2">
            <div className="flex-1 text-xs font-medium">
              <span className="text-blue">{wins}W</span>{" "}
              <span className="text-red">{losses}L</span>{" "}
              <span className="font-normal text-main-6">{winrate}%</span>
            </div>

            <ExpandButton id="playedChampions" />
          </div>
        </div>

        <div className="py-1.5 px-2 bg-main-1 flex justify-center">
          <div className="flex w-full gap-1 max-w-80">
            <button className="py-1 px-2.5 flex items-center justify-center text-center text-xs text-main-text bg-main-3 dark:bg-main-4 rounded">
              All
            </button>

            <button className="border border-main-3 dark:border-main-4 py-1 px-2.5 flex items-center justify-center text-center text-xs text-main-text bg-main-1 dark:bg-main-1 rounded">
              Normal
            </button>

            <button className="border border-main-3 dark:border-main-4 py-1 px-2.5 flex items-center justify-center text-center text-xs text-main-text bg-main-1 dark:bg-main-1 rounded">
              Solo
            </button>

            <button className="border border-main-3 dark:border-main-4 py-1 px-2.5 flex items-center justify-center text-center text-xs text-main-text bg-main-1 dark:bg-main-1 rounded">
              Flex
            </button>

            <button className="border border-main-3 dark:border-main-4 flex-1 py-1 gap-1 px-2.5 flex items-center justify-center text-center text-xs text-main-text bg-main-1 dark:bg-main-1 rounded">
              Queue Type <ArrowDown className="size-3" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-px max-sm:flex-col max-1126:flex-row">
        <div className="flex items-center justify-between w-full gap-4 p-2 max-sm:px-4 max-350:px-2 bg-main-1">
          <div className="flex items-center gap-2">
            <Pie percentage={winrate} />

            <div className="flex flex-col">
              <div className="text-xs font-medium text-main-6">
                <span>{killsPerGame}</span>
                {" / "}
                <span className="text-red">{deathsPerGame}</span>
                {" / "}
                <span>{assistsPerGame}</span>
              </div>

              <p className="text-sm font-bold text-main-text">
                {kdaPerGame}:1 KDA
              </p>
              <p className="text-2xs text-red">P/Kill {pKillPerGame}%</p>
            </div>
          </div>
          <PreferredPositions
            positions={summoner.positions}
            games={summoner.games}
          />
        </div>

        <PlayedChampions champions={summoner.champions} />
      </div>
    </div>
  );
};

export default GamesStats;
