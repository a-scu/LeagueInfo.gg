"use client";

const Circle = ({ color, percentage }) => {
  const r = 56;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100;
  return (
    <circle
      r={r}
      cx={64}
      cy={64}
      fill="transparent"
      stroke={strokePct !== circ ? color : ""}
      strokeWidth="1rem"
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : strokePct}
    ></circle>
  );
};

const Pie = ({ winrate, fetchingGamesStats }) => {
  const secondCircleRotation = (360 * winrate) / 100 - 90;

  return (
    <div className="relative flex items-center justify-center max-500:hidden">
      <svg viewBox="0 0 128 128" className="rounded-full size-16">
        <g transform={`rotate(-90 ${"64 64"})`}>
          <Circle color={"#5383E8"} percentage={winrate} />
        </g>
        <g transform={`rotate(${secondCircleRotation} ${"64 64"})`}>
          <Circle color={fetchingGamesStats ? "#282830" : "#515163"} percentage={100 - winrate} />
        </g>
      </svg>

      {fetchingGamesStats ? (
        <div className="bg-gray-7 rounded-full size-12 absolute" />
      ) : (
        <span
          className={`absolute text-sm leading-none text-center font-bold ${
            winrate === 0 ? "text-red" : "text-db-500"
          }`}
        >
          {winrate.toFixed(0)}%
        </span>
      )}
    </div>
  );
};

export default Pie;
