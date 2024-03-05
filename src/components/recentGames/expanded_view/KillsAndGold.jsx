export default function KillsAndGold({
  summonerTeamWin,
  opponentTeamKills,
  opponentTeamGold,
  summonerTeamKills,
  summonerTeamGold,
}) {
  const opponentTeamKillsPct =
    (opponentTeamKills / (opponentTeamKills + summonerTeamKills)) * 100;

  const opponentTeamGoldPct =
    (opponentTeamGold / (opponentTeamGold + summonerTeamGold)) * 100;

  return (
    <div className="flex flex-col flex-1 w-full gap-1 text-2xs">
      {/* Kills */}
      <div
        className={`relative w-full h-3.5 flex justify-center items-center ${
          summonerTeamWin
            ? "bg-lb-500 dark:bg-db-500"
            : "bg-lr-500 dark:bg-dr-500"
        }`}
      >
        <span className="absolute text-white left-1">{summonerTeamKills}</span>
        <div
          style={{ width: `${opponentTeamKillsPct}%` }}
          className={`absolute right-0 h-3.5 ${
            !summonerTeamWin
              ? "bg-lb-500 dark:bg-db-500"
              : "bg-lr-500 dark:bg-dr-500"
          }`}
        />
        <span className="absolute text-white">Total Kills</span>
        <span className="absolute text-white right-1">{opponentTeamKills}</span>
      </div>

      {/* Gold */}
      <div
        className={`relative w-full h-3.5 flex justify-center items-center ${
          summonerTeamWin
            ? "bg-lb-500 dark:bg-db-500"
            : "bg-lr-500 dark:bg-dr-500"
        }`}
      >
        <span className="absolute text-white left-1">{summonerTeamGold}</span>
        <div
          style={{ width: `${opponentTeamGoldPct}%` }}
          className={`absolute right-0 h-3.5 ${
            !summonerTeamWin
              ? "bg-lb-500 dark:bg-db-500"
              : "bg-lr-500 dark:bg-dr-500"
          }`}
        />
        <span className="absolute text-white">Total Gold</span>
        <span className="absolute text-white right-1">{opponentTeamGold}</span>
      </div>
    </div>
  );
}
