"use client";

import { useState } from "react";

import ArrowDown from "../../icons/ArrowDown";

export default function ExpandButton({ win, gameId }) {
  const [expanded, setExpanded] = useState(false);

  const handleOnClick = () => {
    const expandedView = document.getElementById(`expanded-view-${gameId}`);
    const collapsedView = document.getElementById(`collapsed-view-${gameId}`);

    if (!expanded) {
      expandedView.classList.remove("hidden");
      expandedView.classList.add("flex");
      // collapsedView.classList.add("border-b");
      setExpanded(true);
    } else {
      expandedView.classList.remove("flex");
      expandedView.classList.add("hidden");
      // collapsedView.classList.remove("border-b");
      setExpanded(false);
    }
  };

  const getButtonColor = () => {
    if (win) {
      if (expanded) return "800:bg-blue-1 border-blue-2 800:hover:bg-blue-2";
      return "800:hover:bg-blue-1 800:bg-blue-2 border-blue-2";
    }

    if (expanded) return "800:bg-red-1 border-red-2 800:hover:bg-red-2";
    return "800:hover:bg-red-1 800:bg-red-2 border-red-2";
  };

  return (
    <button
      onClick={handleOnClick}
      className={`border-l flex items-center 800:h-full absolute top-0 right-0 justify-center 800:w-10 w-14 max-410:w-[39px] h-[30px] max-500:h-[23px] max-800:h-[26px] ${getButtonColor()}`}
    >
      <ArrowDown
        className={`absolute 800:bottom-3 transition-transform size-4 ${expanded && "rotate-180"} ${
          win ? "text-blue" : "text-red"
        }`}
      />
    </button>
  );
}
