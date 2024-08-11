import { useStore } from "@nanostores/react";
import { $fetchingRecentGames, $recentGames } from "@/js/store";

import Game from "./Game";
import GameSkeleton from "./gameSkeleton/GameSkeleton";
import QueueTypes from "./QueueTypes";

export default function RecentGames() {
  const fetchingRecentGames = useStore($fetchingRecentGames);
  const recentGames = useStore($recentGames);

  if (fetchingRecentGames) {
    return (
      <div className="">
        <div className="flex flex-col gap-2">
          <QueueTypes />

          <div className="p-2 bg-gray-1 800:rounded">
            <div className="h-4 w-full max-500:h-3.5 flex items-center justify-center animate-pulse">
              <div className="w-full bg-gray-2 rounded-full max-500:h-1.5 h-2" />
            </div>
          </div>

          <div className="p-2 bg-gray-1 800:rounded">
            <div className="h-4 w-full max-500:h-3.5 flex items-center justify-center animate-pulse">
              <div className="w-full bg-gray-2 rounded-full max-500:h-1.5 h-2" />
            </div>
          </div>

          <div className="p-2 bg-gray-1 800:rounded">
            <div className="h-4 w-full max-500:h-3.5 flex items-center justify-center animate-pulse">
              <div className="w-full bg-gray-2 rounded-full max-500:h-1.5 h-2" />
            </div>
          </div>

          <div className="p-2 bg-gray-1 800:rounded">
            <div className="h-4 w-full max-500:h-3.5 flex items-center justify-center animate-pulse">
              <div className="w-full bg-gray-2 rounded-full max-500:h-1.5 h-2" />
            </div>
          </div>

          <div className="p-2 bg-gray-1 800:rounded">
            <div className="h-4 w-full max-500:h-3.5 flex items-center justify-center animate-pulse">
              <div className="w-full bg-gray-2 rounded-full max-500:h-1.5 h-2" />
            </div>
          </div>
        </div>
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
      <QueueTypes />

      {recentGames.map((gameData, index) => (
        <Game key={gameData.gameId || index} gameData={gameData} />
      ))}
    </div>
  );
}
