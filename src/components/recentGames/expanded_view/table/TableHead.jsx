import Swords from "@/components/icons/Swords";
import Objectives from "../Objectives";
import KillsAndGold from "../KillsAndGold";

export default function TableHead({
  win,
  teamSide,
  isSummonerTeam,
  objectives,
  kills,
  team,
  deaths,
  assists,
  opponentTeam,
}) {
  return (
    <thead className={`max-[0px]:hidden flex w-full flex-col items-center bg-main-4 gap-px`}>
      <tr className="flex items-center justify-between w-full h-6 px-1 text-center bg-gray-1 max-sm:h-6 text-gray-6 text-3xs sm:text-2xs">
        <th className="max-sm:w-[209px] w-[231px] p-0 font-normal text-start flex items-center sm:gap-[5px] justify-between">
          <span className={`leading-none ${win ? "text-blue" : "text-red"}`}>
            {win ? "Victory" : "Defeat"}
          </span>

          <div className="flex items-center gap-1">
            <Swords className="max-sm:size-2 size-2.5 aspect-square" />{" "}
            <span>
              {kills} / {deaths} / {assists}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <div
              className={`size-1 rounded-full aspect-square ${
                teamSide === 100 ? "bg-blue" : "bg-red"
              }`}
            />

            <span className="leading-none max-sm:hidden">
              {teamSide === 100 ? "Blue" : "Red"} Team
            </span>
          </div>

          <span className="sm:hidden">Rank / Score</span>
        </th>

        <th className="flex items-center justify-center w-16 p-0 font-normal max-sm:hidden">
          Score / Rank
        </th>

        <th className="flex items-center justify-center w-24 p-0 font-normal max-500:w-16 max-800:w-[72px]">
          KDA
        </th>

        <th className="p-0 max-380:hidden max-800:w-[50px] max-400:w-10 w-[106px] font-normal flex items-center justify-center">
          Damage
        </th>

        <th className="items-center justify-center hidden p-0 w-[46px] font-normal max-500:flex">
          C / V / G
        </th>

        <th className="flex items-center justify-center p-0 font-normal max-500:hidden w-9">CS</th>

        <th className="flex items-center justify-center p-0 font-normal max-500:hidden w-9">
          Wards
        </th>

        <th className="flex items-center justify-center p-0 font-normal max-500:hidden w-9">
          Gold
        </th>
      </tr>
    </thead>
  );
}
