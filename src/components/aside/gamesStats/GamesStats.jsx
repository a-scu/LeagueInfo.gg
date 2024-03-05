import ExpandButton from "../ExpandButton";
import Pie from "./Pie";
import PreferredPositions from "./preferredPositions/PreferredPositions";
import PlayedChampions from "./playedChampions/PlayedChampions";

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
      <div className="flex py-1.5 px-2 justify-between bg-main-1 items-center gap-2">
        <p className="text-sm font-medium text-center dark:font-normal text-main-text">
          Recent Games
        </p>

        <div className="flex items-center gap-2">
          <div className="flex-1 text-xs font-medium">
            <span className="text-blue">{wins}W</span>{" "}
            <span className="text-red">{losses}L</span>{" "}
            <span className="font-normal text-main-6">{winrate}%</span>
          </div>

          <ExpandButton id="recentGamesStats" />
        </div>
      </div>

      <div
        id="recentGamesStats"
        className="flex flex-col gap-px max-sm:flex-col max-1126:flex-row"
      >
        <div className="flex items-center w-full gap-4 p-2 justify-evenly bg-main-1">
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
