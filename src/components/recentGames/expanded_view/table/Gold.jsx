import { formatNumber } from "@/helpers/formatNumber";

export default function Gold({ gold, goldPerMinute }) {
  return (
    <td className="flex flex-col p-0 gap-0.5 text-center max-500:hidden text-lg-500 dark:text-dg-500 w-9 text-3xs sm:text-2xs">
      <span>{formatNumber(gold)}</span>
      <span>{formatNumber(goldPerMinute)}/m</span>
    </td>
  );
}
