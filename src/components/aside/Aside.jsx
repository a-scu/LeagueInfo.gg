import GamesStats from "./gamesStats/GamesStats";
import Ranked from "./ranked/Ranked";

export default function Aside() {
  return (
    <aside className="flex flex-col gap-2 1126:sticky h-fit top-2">
      <Ranked />
      <GamesStats />
    </aside>
  );
}
