import { useEffect, useState } from "react";

import ArrowDown from "@/components/icons/ArrowDown";

const REGIONS = [
  { id: "br", name: "Brazil" },
  { id: "eun", name: "Europe Nordic & East" },
  { id: "euw", name: "Europe West" },
  { id: "jp", name: "Japan" },
  { id: "kr", name: "Korea" },
  { id: "lan", name: "Latin America North" },
  { id: "las", name: "Latin America South" },
  { id: "me", name: "Middle East" },
  { id: "na", name: "North America" },
  { id: "oce", name: "Oceania" },
  { id: "ru", name: "Russia" },
  { id: "sea", name: "South East Asia" },
  { id: "tr", name: "Turkey" },
  { id: "tw", name: "Taiwan" },
  { id: "vn", name: "Vietnam" },
];

export default function Regions({ region, setRegion }) {
  const [expanded, setExpanded] = useState(false);

  const handleOnClick = (region) => {
    setRegion(region);
    setExpanded(false);
    console.log("Region:", region);
  };

  return (
    <div>
      <button
        disabled={region ? false : true}
        type="button"
        onClick={() => setExpanded(!expanded)}
        className={`flex items-center pl-1 h-full max-400:text-2xs gap-1 justify-center text-center max-400:w-14 w-16 text-xs text-blue font-semibold bg-gray-1 border-r border-r-gray-2 ${
          expanded ? "rounded-tl" : "rounded-l"
        }`}
      >
        {region.toUpperCase()}
        {region && (
          <ArrowDown className={`size-3 transition-transform ${expanded && "rotate-180"}`} />
        )}
      </button>

      {expanded && (
        <div className="absolute w-16 overflow-auto z-50 flex flex-col bg-gray-1 border shadow-md rounded-b border-gray-2 max-400:w-14">
          {REGIONS.map(
            ({ id, name }) =>
              id !== region && (
                <button
                  key={id}
                  onClick={() => handleOnClick(id)}
                  className="text-gray-6 text-xs max-400:text-2xs hover:bg-gray-2 py-1.5"
                >
                  {name}
                </button>
              )
          )}
        </div>
      )}
    </div>
  );
}
