export default function KDA({ win, kills, deaths, assists, teamKills }) {
  const kda = deaths === 0 ? 0 : ((kills + assists) / deaths).toFixed(2);

  const kdaColor = kda < 3 ? "text-gray-6" : kda < 5 && kda >= 3 ? "text-teal" : "text-orange";

  const pKill =
    kills === 0 && assists === 0
      ? 0
      : (100 - ((teamKills - (kills + assists)) * 100) / teamKills).toFixed(0);

  return (
    <div className="flex flex-col flex-1 w-24 h-full justify-evenly max-sm:w-[76px]">
      {/* Kills / Deaths / Assists */}
      <span className="font-medium leading-none text-white max-sm:text-sm max-sm:leading-none">
        {kills}
        {" / "}
        <span className={`${win ? "text-db-500" : "text-red"}`}>{deaths}</span>
        {" / "}
        {assists}
      </span>

      <div className="flex flex-col">
        {/* KDA */}
        <span className={`text-xs max-sm:text-2xs font-medium ${kdaColor}`}>{kda}:1 KDA</span>

        {/* P/Kill */}
        <span className={`text-2xs max-sm:text-2xs ${win ? "text-db-500" : "text-red"}`}>
          P/Kill {pKill}%
        </span>
      </div>
    </div>
  );
}
