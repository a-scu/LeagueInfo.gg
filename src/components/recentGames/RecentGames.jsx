import { useStore } from "@nanostores/react";
import { $fetchingRecentGames, $recentGames } from "@/js/store";

import Game from "./Game";
// import Loading from "../icons/Loading";

export default function RecentGames() {
  const fetchingRecentGames = useStore($fetchingRecentGames);
  const recentGames = useStore($recentGames);

  if (fetchingRecentGames)
    return (
      <div className="flex flex-col gap-2 animate-pulse">
        <div className="bg-gray-1 h-24 w-full rounded"></div>
        <div className="bg-gray-1 h-24 w-full rounded"></div>
        <div className="bg-gray-1 h-24 w-full rounded"></div>
        <div className="bg-gray-1 h-24 w-full rounded"></div>
        <div className="bg-gray-1 h-24 w-full rounded"></div>
      </div>
    );

  if (!recentGames || !recentGames.length)
    return (
      <div className="p-2 py-1.5 font-medium text-white bg-gray-1 text-sm rounded">
        No recent games
      </div>
    );

  return (
    <div className="flex flex-col gap-2">
      {recentGames.map((gameData) => (
        <Game key={gameData.gameId} gameData={gameData} />
      ))}
    </div>
  );
}
