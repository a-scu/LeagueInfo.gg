import { useStore } from "@nanostores/react";
import { $fetchingRecentGames, $recentGames } from "@/js/store";

import Game from "./Game";
import GameSkeleton from "./gameSkeleton/GameSkeleton";

export default function RecentGames() {
  const fetchingRecentGames = useStore($fetchingRecentGames);
  const recentGames = useStore($recentGames);

  if (fetchingRecentGames) {
    return (
      <div className="flex flex-col gap-2 animate-pulse">
        <GameSkeleton />
        <GameSkeleton />
        <GameSkeleton />
        <GameSkeleton />
        <GameSkeleton />
      </div>
    );
  }

  if (!fetchingRecentGames && (!recentGames || !recentGames.length))
    return (
      <div className="p-2 py-1.5 font-medium text-white bg-gray-1 text-sm rounded">
        No recent games
      </div>
    );

  return (
    <div className="flex flex-col gap-2">
      {recentGames.map((gameData, index) => (
        <Game key={gameData.gameId || index} gameData={gameData} />
      ))}
    </div>
  );
}
