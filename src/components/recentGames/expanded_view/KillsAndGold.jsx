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
    <div className="flex gap-1 text-white rounded-sm text-2xs w-80 h-fit">
      {/* Kills */}
      <div
        className={`relative w-full h-3.5 flex justify-center items-center overflow-hidden ${
          summonerTeamWin ? "bg-blue" : "bg-main-4"
        }`}
      >
        <span className="absolute left-1">{summonerTeamKills}</span>
        <div
          style={{ width: `${opponentTeamKillsPct}%` }}
          className={`absolute right-0 h-3.5 ${
            !summonerTeamWin ? "bg-blue" : "bg-main-4"
          }`}
        />
        <span className="absolute">Total Kills</span>
        <span className="absolute right-1">{opponentTeamKills}</span>
      </div>

      {/* Gold */}
      <div
        className={`relative w-full h-3.5 flex justify-center items-center overflow-hidden ${
          summonerTeamWin ? "bg-blue" : "bg-main-4"
        }`}
      >
        <span className="absolute left-1">{summonerTeamGold}</span>
        <div
          style={{ width: `${opponentTeamGoldPct}%` }}
          className={`absolute right-0 h-3.5 ${
            !summonerTeamWin ? "bg-blue" : "bg-main-4"
          }`}
        />
        <span className="absolute">Total Gold</span>
        <span className="absolute right-1">{opponentTeamGold}</span>
      </div>
    </div>
  );
}
