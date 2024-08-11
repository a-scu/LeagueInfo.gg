import { useStore } from "@nanostores/react";
import { $fetchingRecentGames, $queueType, setQueueType } from "@/js/store";

export default function QueueTypes() {
  const fetchingRecentGames = useStore($fetchingRecentGames);
  const queueType = useStore($queueType);

  const QUEUE_TYPES = [
    { id: "all", title: "All" },
    { id: "solo duo", title: "Ranked Solo/Duo" },
    { id: "flex", title: "Ranked Flex" },
    { id: "aram", title: "ARAM" },
    { id: "clash", title: "Clash" },
    { id: "normal", title: "Normal" },
    { id: "co-op", title: "Co-op vs. AI" },
    { id: "ar urf", title: "   AR Ultra Rapid Fire" },
    { id: "nexus blitz", title: "  Nexus Blitz" },
  ];

  return (
    <>
      <div
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="flex gap-2 max-800:gap-0.5 max-800:bg-gray-1 max-800:overflow-x-scroll"
      >
        {QUEUE_TYPES.map(({ id, title }) => (
          <button
            key={id}
            type="button"
            disabled={fetchingRecentGames}
            onClick={() => setQueueType(id)}
            className={`max-800:bg-gray-1 border max-800:border-2 max-500:text-2xs border-gray-1 min-w-fit rounded max-800:rounded-md py-1.5 text-xs px-3 ${
              fetchingRecentGames && "opacity-50"
            } ${
              !fetchingRecentGames && queueType === id
                ? "max-800:bg-gray-3 bg-gray-1 text-white"
                : "bg-gray-3 text-gray-6"
            } ${!fetchingRecentGames && queueType !== id && "hover:bg-gray-7"}`}
          >
            {title}
          </button>
        ))}
      </div>
    </>
  );
}
