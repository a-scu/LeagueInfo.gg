import ArrowDown from "@/components/icons/ArrowDown";
import { useState } from "react";

const REGIONS = ["LAS", "BR", "LAN", "NA", "EUW", "EUNE", "KR", "JP", "TR", "RU", "OCE"];

export default function Regions() {
  const [selectedRegion, setSelectedRegion] = useState("LAS");
  const [expanded, setExpanded] = useState(false);

  const handleOnClick = (region) => {
    setSelectedRegion(region);
    setExpanded(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className={`flex items-center pl-1 h-full gap-1 justify-center text-center w-16 text-xs text-blue font-semibold bg-gray-1 border-r border-r-gray-2 ${
          expanded ? "rounded-tl" : "rounded-l"
        }`}
      >
        {selectedRegion}
        <ArrowDown className={`size-3 transition-transform ${expanded && "rotate-180"}`} />
      </button>

      {expanded && (
        <div className="absolute w-16 overflow-auto z-50 flex flex-col bg-gray-1 border shadow-md rounded-b border-gray-2">
          {REGIONS.map(
            (region) =>
              region !== selectedRegion && (
                <button
                  key={region}
                  onClick={() => handleOnClick(region)}
                  className="text-gray-6 text-xs hover:bg-gray-2 py-1.5"
                >
                  {region}
                </button>
              )
          )}
        </div>
      )}
    </div>
  );
}
