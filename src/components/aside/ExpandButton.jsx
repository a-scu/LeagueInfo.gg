"use client";

import { useState } from "react";

import ArrowDown from "../icons/ArrowDown";

const ExpandButton = ({ id }) => {
  const [expanded, setExpanded] = useState(true);

  const handleOnClick = () => {
    const recentGamesStats = document.getElementById(id);

    if (!expanded) {
      recentGamesStats.classList.remove("hidden");
      recentGamesStats.classList.add("flex");
      setExpanded(true);
    } else {
      recentGamesStats.classList.remove("flex");
      recentGamesStats.classList.add("hidden");
      setExpanded(false);
    }

    setExpanded(!expanded);
  };

  return (
    <button
      onClick={handleOnClick}
      className="flex items-center justify-center h-5 gap-1 px-2 text-xs rounded text-main-6 bg-main-3 dark:bg-main-4"
    >
      <span>{expanded ? "Collapse" : "Expand"}</span>
      <ArrowDown
        className={`size-3 transition-transform ${
          expanded ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

export default ExpandButton;
