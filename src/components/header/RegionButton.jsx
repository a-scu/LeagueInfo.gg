import ArrowDown from "../icons/ArrowDown";

export default function RegionButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 px-3 text-xs text-db-500 bg-lb-100"
    >
      {children}
      <ArrowDown className="size-3" />
    </button>
  );
}
