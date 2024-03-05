"use client";

const Circle = ({ color, percentage, width }) => {
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
      strokeWidth={width}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    ></circle>
  );
};

const Pie = ({ percentage }) => {
  const secondCircleRotation = (360 * percentage) / 100 - 90;

  return (
    <div className="relative flex items-center justify-center">
      <svg viewBox="0 0 128 128" className="w-16 h-16 rounded-full">
        <g transform={`rotate(-90 ${"64 64"})`}>
          <Circle width={"16px"} color={"#5383E8"} percentage={percentage} />
        </g>
        <g transform={`rotate(${secondCircleRotation} ${"64 64"})`}>
          <Circle
            width={"16px"}
            color="#E84057"
            percentage={100 - percentage}
          />
        </g>
      </svg>

      <span
        className={`absolute max-sm:text-xs text-sm font-bold ${
          percentage === 0 ? "text-red-500" : "text-lb-500 dark:text-db-500"
        }`}
      >
        {percentage.toFixed(0)}%
      </span>
    </div>
  );
};

export default Pie;
