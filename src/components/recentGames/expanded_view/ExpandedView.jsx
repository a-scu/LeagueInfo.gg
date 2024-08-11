import TeamsComparison from "./TeamsComparison";
import Table from "./table/Table";

export default function ExpandedView({
  gameId,
  summonerPuuid,
  summonerTeam,
  opponentTeam,
  gameStats,
}) {
  return (
    <div id={`expanded-view-${gameId}`} className="flex-col hidden">
      <Table
        win={summonerTeam.win}
        summonerPuuid={summonerPuuid}
        participants={summonerTeam.participants}
        teamKills={summonerTeam?.objectives?.champion?.kills}
        teamSide={summonerTeam.teamId}
        objectives={summonerTeam.objectives}
        gameStats={gameStats}
        team={summonerTeam}
        isSummonerTeam
        opponentTeam={opponentTeam}
      />

      <Table
        win={opponentTeam.win}
        participants={opponentTeam.participants}
        teamKills={opponentTeam?.objectives?.champion?.kills}
        teamSide={opponentTeam.teamId}
        objectives={opponentTeam.objectives}
        gameStats={gameStats}
        team={opponentTeam}
        opponentTeam={summonerTeam}
      />

      {/* <TeamsComparison
        summonerTeam={summonerTeam}
        opponentTeam={opponentTeam}
      /> */}
    </div>
  );
}
