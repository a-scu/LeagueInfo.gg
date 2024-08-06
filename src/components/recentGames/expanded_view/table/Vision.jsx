import { formatNumber } from "@/js/tools";

export default function Vision({
  visionScore,
  visionScorePerMinute,
  controlWards,
  wards,
  wardsKilled,
}) {
  return (
    <td className="flex flex-col p-0 text-center max-500:hidden text-gray-6 w-9 text-3xs sm:text-2xs">
      <span>{formatNumber(visionScore)}</span>
      <span>{formatNumber(visionScorePerMinute)}/m</span>
    </td>
  );
}
