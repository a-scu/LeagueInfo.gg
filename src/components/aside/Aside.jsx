import Ranked from "./ranked/Ranked";
import GamesStats from "./gamesStats/GamesStats";

export default function Aside({ ranked, stats }) {
  return (
    <aside className="flex flex-col gap-2 1126:sticky h-fit top-2">
      <Ranked data={ranked} />
      <GamesStats stats={stats} />
    </aside>
  );
}
