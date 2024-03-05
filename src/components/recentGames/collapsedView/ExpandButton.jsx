"use client";

import { useState } from "react";

import ArrowDown from "../../icons/ArrowDown";

export default function ExpandButton({ win, gameId }) {
  const [expanded, setExpanded] = useState(false);

  const handleOnClick = () => {
    const expandedView = document.getElementById(`expanded-view-${gameId}`);
    const arrow = document.querySelector(`.arrow-${gameId}`);

    if (!expanded) {
      expandedView.classList.remove("hidden");
      expandedView.classList.add("flex");
      arrow.classList.add("rotate-90");
      setExpanded(true);
    } else {
      expandedView.classList.remove("flex");
      expandedView.classList.add("hidden");
      arrow.classList.remove("rotate-90");
      setExpanded(false);
    }
  };

  return (
    <button
      onClick={handleOnClick}
      className={` max-800:border-l flex items-center 800:h-full absolute top-0 right-0 justify-center 800:w-10 w-[39px] h-[30px] max-800:h-[26px] ${
        win
          ? "800:bg-lb-200 800:hover:bg-lb-100 dark:800:bg-db-300 dark:800:hover:bg-db-100 dark:border-db-300 border-lb-200"
          : "800:bg-lr-200 800:hover:bg-lr-100 dark:800:bg-dr-300 dark:800:hover:bg-dr-100 dark:border-dr-300 border-lr-200"
      }`}
    >
      <ArrowDown
        className={`transition-transform arrow-${gameId} size-4 ${
          expanded && "rotate-180"
        } ${
          win ? "text-lb-500 dark:text-lb-500" : "text-lr-500 dark:text-lr-500"
        }`}
      />
    </button>
  );
}
