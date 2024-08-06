import { formatNumber } from "@/js/tools";

export default function CS({ cs, csPerMinute }) {
  return (
    <td className="p-0 text-center max-500:hidden text-gray-6 w-9 text-3xs sm:text-2xs">
      <div className="flex flex-col">
        <span>{formatNumber(cs)}</span>
        <span>{formatNumber(csPerMinute)}/m</span>
      </div>
    </td>
  );
}
