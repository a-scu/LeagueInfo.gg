import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableFoot from "./tableFoot/TableFoot";

export default function Table({
  win,
  summonerPuuid,
  participants,
  teamKills,
  teamSide,
  gameStats,
  objectives,
  team,
  isSummonerTeam,
  opponentTeam,
}) {
  return (
    <table
      className={`flex w-full ${!isSummonerTeam ? "flex-col" : "flex-col"} ${
        win ? "bg-blue-1" : "bg-red-1"
      }`}
    >
      <TableHead
        win={win}
        teamSide={teamSide}
        objectives={objectives}
        gameStats={gameStats}
        team={team}
        opponentTeam={opponentTeam}
        isSummonerTeam={isSummonerTeam}
        kills={team.kills}
        deaths={team.deaths}
        assists={team.assists}
      />
      <TableBody
        win={win}
        summonerPuuid={summonerPuuid}
        participants={participants}
        teamKills={teamKills}
        gameStats={gameStats}
        isSummonerTeam={isSummonerTeam}
      />
      <TableFoot objectives={objectives} win={win} gameStats={gameStats} team={team} />
    </table>
  );
}
