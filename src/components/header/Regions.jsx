import ArrowDown from "@/components/icons/ArrowDown";

export default function Regions({
  expanded,
  setExpanded,
  handleClickOutside,
  region,
  setRegion,
  inputFocused,
  dropdownRef,
}) {
  return (
    <button
      disabled={!region}
      type="button"
      onClick={() => {
        handleClickOutside();
        setExpanded(!expanded);
      }}
      className={`flex items-center pl-1 h-full border-r border-r-gray-2 max-400:text-2xs gap-1 justify-center text-center max-400:w-14 w-16 text-xs rounded-l text-blue font-semibold bg-gray-1 ${
        expanded || inputFocused ? "rounded-bl-none" : ""
      }`}
    >
      {region.toUpperCase()}
      {region && (
        <ArrowDown className={`size-3 transition-transform ${expanded && "rotate-180"}`} />
      )}
    </button>
  );
}
