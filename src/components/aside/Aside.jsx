import { useStore } from "@nanostores/react";
import GamesStats from "./gamesStats/GamesStats";
import Ranked from "./ranked/Ranked";

import { $scrolled } from "@/js/store";

export default function Aside() {
  const scrolled = useStore($scrolled);

  return (
    <aside className={`flex flex-col gap-2 1126:sticky h-fit ${scrolled ? "top-14" : "top-2"}`}>
      <Ranked />
      <GamesStats />
    </aside>
  );
}
