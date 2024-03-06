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
    <div className="flex flex-col gap-px overflow-hidden rounded max-sm:flex-col max-1126:flex-row max-800:rounded-none">
      <div className="flex items-center justify-between w-full gap-4 p-2 bg-main-1">
        <div className="flex items-center gap-2">
          <Pie winrate={winrate} wins={wins} losses={losses} />

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
  );
};

export default GamesStats;
