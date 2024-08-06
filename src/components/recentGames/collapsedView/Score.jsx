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
    <div className="flex gap-0.5 text-white items-center text-2xs sm:text-xs">
      <span className={`px-2 py-0.5 rounded-full w-fit ${bgColor}`}>{score}</span>

      {largestMultiKill > 1 && (
        <>
          <span
            className={`max-500:hidden px-2 py-0.5 rounded-full w-fit ${
              win ? "bg-db-500" : "bg-dr-500"
            }`}
          >
            {formattedLargestMultiKill}
          </span>
          <span
            className={`500:hidden flex items-center justify-center size-4-5 aspect-square rounded-full w-fit ${
              win ? "bg-db-500" : "bg-dr-500"
            }`}
          >
            {largestMultiKill}
          </span>
        </>
      )}
    </div>
  );
}
