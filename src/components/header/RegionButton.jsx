import ArrowDown from "@/components/icons/ArrowDown";

export default function RegionButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center h-8 gap-1 pr-2 pl-3 text-xs text-blue bg-gray-1 border-r border-r-gray-2"
    >
      {children}
      <ArrowDown className="size-3" />
    </button>
  );
}
