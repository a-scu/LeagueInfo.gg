import KillsAndGold from "./KillsAndGold";
import Objectives from "./Objectives";

export default function TeamsComparison({ summonerTeam, opponentTeam }) {
  return (
    <div className="flex p-2 bg-white dark:bg-dg-0">
      <div className="flex flex-col items-center justify-center flex-1 gap-0.5">
        <Objectives
          win={summonerTeam.win}
          objectives={summonerTeam.objectives}
        />
        <Objectives
          win={opponentTeam.win}
          objectives={opponentTeam.objectives}
        />
      </div>

      <KillsAndGold
        summonerTeamWin={summonerTeam.win}
        opponentTeamKills={opponentTeam.kills}
        opponentTeamGold={opponentTeam.gold}
        summonerTeamKills={summonerTeam.kills}
        summonerTeamGold={summonerTeam.gold}
      />
    </div>
  );
}
