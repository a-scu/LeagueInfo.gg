import Ranked from "./ranked/Ranked";
import GamesStats from "./gamesStats/GamesStats";
import ChampionsStats from "./championsStats/ChampionsStats";

export default function Aside({ ranked, stats, champions }) {
  return (
    <aside className="flex flex-col gap-2 1126:sticky h-fit top-2">
      <Ranked data={ranked} />
      <div className="flex flex-col gap-2 max-1126:flex-col-reverse">
        <GamesStats stats={stats} />
        <ChampionsStats champions={champions} />
      </div>
    </aside>
  );
}
