import Pie from "./Pie";
import PreferredPositions from "./preferredPositions/PreferredPositions";
import PlayedChampions from "./playedChampions/PlayedChampions";

const GamesStats = ({ stats }) => {
  const { summoner } = stats;
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

  return (
    <div className="max-500:grid-cols-[96px,40px,96px] grid-cols-[160px,112px,160px] max-1126:justify-between max-800:rounded-none grid gap-2 p-2 overflow-hidden rounded 1126:grid-cols-[1fr,112px] 1126:grid-rows-[fit,fit] bg-main-1">
      <div className="flex flex-col flex-1 gap-2">
        <span className="text-xs text-main-6 max-500:text-2xs">
          {games}G {wins}W {losses}L{" "}
          <span className="max-500:hiden">({winrate.toFixed(0)}%)</span>
        </span>

        <div className="flex items-center h-full gap-2">
          <Pie winrate={winrate} />

          <div className="flex flex-col">
            <div className="text-xs font-medium max-500:text-2xs text-main-6">
              <span>{killsPerGame}</span>
              {" / "}
              <span className="text-red">{deathsPerGame}</span>
              {" / "}
              <span>{assistsPerGame}</span>
            </div>
            <p className="text-sm font-medium text-main-text">
              {kdaPerGame}:1 KDA
            </p>
            <p className="text-xs max-500:text-2xs text-red">
              P/Kill {pKillPerGame}%
            </p>
          </div>
        </div>
      </div>

      <PreferredPositions
        positions={summoner.positions}
        games={summoner.games}
      />

      <PlayedChampions champions={summoner.champions} games={games} />
    </div>
  );
};

export default GamesStats;
