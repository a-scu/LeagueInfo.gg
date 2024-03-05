import Game from "./Game";

export default function RecentGames({ recentGames }) {
  if (!recentGames.length)
    return (
      <div className="p-2 py-1.5 font-medium dark:text-white dark:bg-dg-0 bg-white text-black text-sm rounded">
        No recent matches
      </div>
    );

  return (
    <div className="flex flex-col gap-2">
      {recentGames.map((game, i) => {
        return <Game key={`game-${i}`} game={game} />;
      })}
    </div>
  );
}
