import KillsAndGold from "./KillsAndGold";
import Objectives from "./Objectives";

export default function TeamsComparison({ summonerTeam, opponentTeam }) {
  return (
    <div className="flex items-center justify-evenly gap-1 px-1 py-1.5 bg-main-2">
      <Objectives win={summonerTeam.win} objectives={summonerTeam.objectives} />

      <KillsAndGold
        summonerTeamWin={summonerTeam.win}
        opponentTeamKills={opponentTeam.kills}
        opponentTeamGold={opponentTeam.gold}
        summonerTeamKills={summonerTeam.kills}
        summonerTeamGold={summonerTeam.gold}
      />

      <Objectives win={opponentTeam.win} objectives={opponentTeam.objectives} />
    </div>
  );
}
