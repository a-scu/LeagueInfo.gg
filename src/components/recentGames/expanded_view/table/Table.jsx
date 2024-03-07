import TableHead from "./TableHead";
import TableBody from "./TableBody";

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
}) {
  return (
    <table
      className={`flex flex-col w-full ${
        win ? "bg-lb-100 dark:bg-db-100" : "bg-lr-100 dark:bg-dr-100"
      }`}
    >
      <TableHead
        win={win}
        teamSide={teamSide}
        objectives={objectives}
        gameStats={gameStats}
        team={team}
        isSummonerTeam={isSummonerTeam}
      />
      <TableBody
        win={win}
        summonerPuuid={summonerPuuid}
        participants={participants}
        teamKills={teamKills}
        gameStats={gameStats}
        isSummonerTeam={isSummonerTeam}
      />
    </table>
  );
}
