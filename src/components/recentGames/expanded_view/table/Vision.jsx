import { formatNumber } from "@/helpers/formatNumber";

export default function Vision({
  visionScore,
  visionScorePerMinute,
  controlWards,
  wards,
  wardsKilled,
}) {
  return (
    <td className="flex flex-col p-0 text-center max-500:hidden text-lg-500 dark:text-dg-500 w-9 text-3xs sm:text-2xs">
      <span>{formatNumber(visionScore)}</span>
      <span>{formatNumber(visionScorePerMinute)}/m</span>
    </td>
  );
}
