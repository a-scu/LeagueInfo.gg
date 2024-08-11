import CollapsedView from "./collapsedView/CollapsedView";
import ExpandedView from "./expanded_view/ExpandedView";

export default function Game({ gameData }) {
  const {
    error,
    queue,
    summoner,
    gameDuration,
    gameAge,
    gameId,
    summonerTeam,
    opponentTeam,
    gameStats,
  } = gameData;

  if (error) {
    return (
      <div className="bg-gray-1 max-500:p-1.5 max-800:rounded-none rounded p-2 items-center">
        <span className="max-500:text-2xs text-gray-6 text-xs">{error}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full overflow-hidden rounded-none 800:rounded">
      <CollapsedView
        queue={queue}
        gameId={gameId}
        gameAge={gameAge}
        gameDuration={gameDuration}
        summoner={summoner}
        summonerTeam={summonerTeam}
        opponentTeam={opponentTeam}
      />

      <ExpandedView
        gameId={gameId}
        summonerPuuid={summoner.puuid}
        gameStats={gameStats}
        summonerTeam={summonerTeam}
        opponentTeam={opponentTeam}
      />
    </div>
  );
}
