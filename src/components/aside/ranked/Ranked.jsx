import { useStore } from "@nanostores/react";
import { $fetchingRankedData, $rankedData } from "@/js/store";

import Rank from "./Rank";
import ArrowDown from "@/components/icons/ArrowDown";

export default function Ranked() {
  const fetchingRankedData = useStore($fetchingRankedData);
  const rankedData = useStore($rankedData) || {};

  const { solo, flex } = rankedData;

  return (
    <div
      className={`flex flex-col gap-1 overflow-hidden justify-center rounded max-800:rounded-none ${
        fetchingRankedData && ""
      } `}
    >
      <div className="flex gap-px overflow-hidden justify-center rounded max-800:rounded-none">
        {!solo && !flex ? (
          <div className="bg-gray-1 max-500:text-2xs text-gray-4 text-xs p-2 rounded flex-1 items-center text-center justify-center">
            Unranked
          </div>
        ) : (
          <>
            <Rank queue={"Solo"} fetchingRankedData={fetchingRankedData} rankData={solo} />
            <Rank queue={"Flex"} fetchingRankedData={fetchingRankedData} rankData={flex} />
          </>
        )}
      </div>
    </div>
  );
}
