export default function KDA({ teamKills, kills, deaths, assists, largestMultiKill, win }) {
  const pKill =
    kills === 0 && assists === 0
      ? 0
      : (100 - ((teamKills - (kills + assists)) * 100) / teamKills).toFixed(0);

  const kda = deaths === 0 ? 0 : ((kills + assists) / deaths).toFixed(2);

  const kdaColor =
    kda < 3
      ? "text-gray-6"
      : kda < 4 && kda >= 3
      ? "text-teal"
      : kda < 5 && kda >= 4
      ? "text-kdaBlue"
      : "text-orange";

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

  const responsiveFormattedLargestMultiKill =
    largestMultiKill < 2
      ? null
      : largestMultiKill === 2
      ? "Double"
      : largestMultiKill === 3
      ? "Triple"
      : largestMultiKill === 4
      ? "Quadra"
      : "Penta";

  return (
    <td className="flex flex-col max-sm:gap-0.5 items-center w-[72px] p-0 text-center max-500:mt-0 max-500:w-16 text-3xs sm:text-2xs 800:w-24">
      <span className="text-gray-6">
        {kills}
        <span>{" / "}</span>
        {deaths}
        <span>{" / "}</span>
        {assists} <span className={`max-800:hidden text-gray-6`}>({pKill}%)</span>
      </span>

      <span className={`500:hidden text-gray-6`}>
        {pKill}%{" "}
        <span className={`font-medium ${kdaColor}`}> {kda === 0 ? "Perfect" : `${kda}:1`}</span>
      </span>

      <span className={`max-500:hidden font-medium ${kdaColor}`}>
        <span className={`800:hidden text-gray-6`}>({pKill}%)</span>{" "}
        {kda === 0 ? "Perfect" : `${kda}:1`}
      </span>

      {largestMultiKill > 1 && (
        <>
          <span
            className={`max-500:hidden max-sm:text-3xs text-2xs rounded-full w-fit ${
              win ? "text-gray-6" : "text-gray-6"
            }`}
          >
            {formattedLargestMultiKill}
          </span>

          <span
            className={`500:hidden max-sm:text-3xs text-2xs rounded-full w-fit ${
              win ? "text-gray-6" : "text-gray-6"
            }`}
          >
            {responsiveFormattedLargestMultiKill}
          </span>
        </>
      )}
    </td>
  );
}
