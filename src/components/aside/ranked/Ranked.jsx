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
        <Rank queue={"Solo"} fetchingRankedData={fetchingRankedData} rankData={solo} />
        <Rank queue={"Flex"} fetchingRankedData={fetchingRankedData} rankData={flex} />
      </div>
    </div>
  );
}
