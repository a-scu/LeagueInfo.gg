import ExpandButton from "../ExpandButton";
import Rank from "./Rank";

export default function Ranked({ data }) {
  const { solo, flex, highestRank } = data;

  return (
    <div className="flex flex-col gap-px overflow-hidden rounded max-800:rounded-none">
      <div className="flex py-1.5 px-2 justify-between bg-main-1 items-center gap-2">
        <p className="text-sm font-medium text-center dark:font-normal text-main-text">
          Ranked
        </p>

        <div className="flex items-center gap-2">
          <span className="text-xs text-main-6">
            {highestRank.tier[0]}
            {highestRank.tier.slice(1).toLowerCase()} {highestRank.rank}
          </span>
          <ExpandButton id="ranked" />
        </div>
      </div>

      <div id="ranked" className="flex w-full gap-px">
        <Rank queue={"SOLO"} data={solo} />
        <Rank queue={"FLEX"} data={flex} />
      </div>
    </div>
  );
}
