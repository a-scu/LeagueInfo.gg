export default function Score({ largestMultiKill, score, win }) {
  const bgColor = score === "MVP" ? "bg-mvp" : score === "ACE" ? "bg-ace" : "bg-gray-5";

  const formattedLargestMultiKill =
    largestMultiKill < 2
      ? null
      : largestMultiKill === 2
      ? "Double Kill"
      : largestMultiKill === 3
      ? "Triple Kill"
      : largestMultiKill === 4
      ? "Quadra Kill"
      : "Pentakill";

  return (
    <div
      className={`flex gap-0.5 text-white items-center text-2xs sm:text-xs border-l pl-0.5 800:pl-1 ${
        win ? "border-l-db-300" : "border-l-dr-300"
      }`}
    >
      <span className={`px-2 py-0.5 rounded-full w-fit ${bgColor}`}>{score}</span>

      {largestMultiKill > 1 && (
        <>
          <span
            className={`max-500:hidden px-2 py-0.5 max-300:hidden max-410:flex rounded-full w-fit ${
              win ? "bg-red" : "bg-dr-500"
            }`}
          >
            {formattedLargestMultiKill}
          </span>
          <span
            className={`500:hidden flex items-center max-300:flex max-410:hidden justify-center size-4-5 aspect-square rounded-full w-fit ${
              win ? "bg-red" : "bg-dr-500"
            }`}
          >
            {largestMultiKill}
          </span>
        </>
      )}
    </div>
  );
}
