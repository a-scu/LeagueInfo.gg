import Rank from "./Rank";

export default function Ranked({ data }) {
  const { solo, flex } = data;

  return (
    <div className="flex flex-col gap-px overflow-hidden rounded max-800:rounded-none">
      <div className="flex w-full gap-px">
        <Rank queue={"SOLO"} data={solo} />
        <Rank queue={"FLEX"} data={flex} />
      </div>
    </div>
  );
}
