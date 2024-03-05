import ClientLog from "../ClientLog";
import CollapsedView from "./collapsedView/CollapsedView";
import ExpandedView from "./expanded_view/ExpandedView";

export default function Game({ game }) {
  const {
    queue,
    summoner,
    gameDuration,
    gameAge,
    gameId,
    summonerTeam,
    opponentTeam,
    gameStats,
  } = game;

  return (
    <div className="flex flex-col w-full overflow-hidden rounded-none 800:rounded">
      {/* <ClientLog log={game} /> */}

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
