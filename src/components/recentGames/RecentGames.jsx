import { useStore } from "@nanostores/react";
import { $fetchingRecentGames, $recentGames } from "@/js/store";

import Game from "./Game";
import GameSkeleton from "./gameSkeleton/GameSkeleton";

export default function RecentGames() {
  const fetchingRecentGames = useStore($fetchingRecentGames);
  const recentGames = useStore($recentGames);

  if (fetchingRecentGames) {
    return (
      <div className="">
        <div className="flex flex-col gap-2">
          <div
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            className="flex gap-2 max-800:hidden max-800:overflow-x-scroll"
          >
            <div className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-transparent px-3">
              All
            </div>

            <div className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-transparent px-3">
              Ranked Solo/Duo
            </div>

            <div className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-transparent px-3">
              Ranked Flex
            </div>

            <div className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-transparent px-3">
              ARAM
            </div>

            <div className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-transparent px-3">
              Clash
            </div>

            <div className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-transparent px-3">
              Normal
            </div>

            <div className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-transparent px-3">
              Co-op vs. AI
            </div>

            <div className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-transparent px-3">
              AR Ultra Rapid Fire
            </div>

            <div className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-transparent px-3">
              Nexus Blitz
            </div>
          </div>

          <div
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            className="hidden gap-2 bg-gray-1 max-800:flex max-800:overflow-x-scroll"
          >
            <div className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-transparent px-3">
              All
            </div>

            <div className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-transparent px-3">
              Ranked Solo/Duo
            </div>

            <div className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-transparent px-3">
              Ranked Flex
            </div>

            <div className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-transparent px-3">
              ARAM
            </div>

            <div className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-transparent px-3">
              Clash
            </div>

            <div className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-transparent px-3">
              Normal
            </div>

            <div className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-transparent px-3">
              Co-op vs. AI
            </div>

            <div className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-transparent px-3">
              AR Ultra Rapid Fire
            </div>

            <div className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-transparent px-3">
              Nexus Blitz
            </div>
          </div>

          <div className="bg-gray-1 800:rounded p-2">
            <div className="h-4 w-full max-500:h-3.5 flex items-center justify-center animate-pulse">
              <div className="w-full bg-gray-2 rounded-full max-500:h-1.5 h-2" />
            </div>
          </div>

          <div className="bg-gray-1 800:rounded p-2">
            <div className="h-4 w-full max-500:h-3.5 flex items-center justify-center animate-pulse">
              <div className="w-full bg-gray-2 rounded-full max-500:h-1.5 h-2" />
            </div>
          </div>

          <div className="bg-gray-1 800:rounded p-2">
            <div className="h-4 w-full max-500:h-3.5 flex items-center justify-center animate-pulse">
              <div className="w-full bg-gray-2 rounded-full max-500:h-1.5 h-2" />
            </div>
          </div>

          <div className="bg-gray-1 800:rounded p-2">
            <div className="h-4 w-full max-500:h-3.5 flex items-center justify-center animate-pulse">
              <div className="w-full bg-gray-2 rounded-full max-500:h-1.5 h-2" />
            </div>
          </div>

          <div className="bg-gray-1 800:rounded p-2">
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
      <div
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="flex gap-2 max-800:hidden max-800:overflow-x-scroll"
      >
        <button className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-white px-3">
          All
        </button>

        <button className="bg-gray-3 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-gray-6 px-3">
          Ranked Solo/Duo
        </button>

        <button className="bg-gray-3 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-gray-6 px-3">
          Ranked Flex
        </button>

        <button className="bg-gray-3 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-gray-6 px-3">
          ARAM
        </button>

        <button className="bg-gray-3 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-gray-6 px-3">
          Clash
        </button>

        <button className="bg-gray-3 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-gray-6 px-3">
          Normal
        </button>

        <button className="bg-gray-3 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-gray-6 px-3">
          Co-op vs. AI
        </button>

        <button className="bg-gray-3 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-gray-6 px-3">
          AR Ultra Rapid Fire
        </button>

        <button className="bg-gray-3 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-gray-6 px-3">
          Nexus Blitz
        </button>
      </div>

      <div
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="hidden gap-2 bg-gray-1 max-800:flex max-800:overflow-x-scroll"
      >
        <button className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-white px-3">
          All
        </button>

        <button className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-gray-6 px-3">
          Ranked Solo/Duo
        </button>

        <button className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-gray-6 px-3">
          Ranked Flex
        </button>

        <button className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-gray-6 px-3">
          ARAM
        </button>

        <button className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-gray-6 px-3">
          Clash
        </button>

        <button className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-gray-6 px-3">
          Normal
        </button>

        <button className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-gray-6 px-3">
          Co-op vs. AI
        </button>

        <button className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-gray-6 px-3">
          AR Ultra Rapid Fire
        </button>

        <button className="bg-gray-1 border border-gray-1 min-w-fit rounded flex items-center justify-center py-1.5 text-xs text-gray-6 px-3">
          Nexus Blitz
        </button>
      </div>

      {recentGames.map((gameData, index) => (
        <Game key={gameData.gameId || index} gameData={gameData} />
      ))}
    </div>
  );
}
