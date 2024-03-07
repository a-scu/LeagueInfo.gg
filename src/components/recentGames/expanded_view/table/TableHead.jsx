export default function TableHead({ win, teamSide, isSummonerTeam }) {
  return (
    <thead
      className={`bg-blue max-[0px]:hidden flex w-full items-center max-sm:h-5 px-1 h-6 ${
        win ? "bg-main-1 dark:bg-main-2" : "bg-main-1 dark:bg-main-2"
      } ${isSummonerTeam ? "border-0" : "border-0"}`}
    >
      <tr className="flex items-center justify-between w-full text-center text-lg-500 dark:text-dg-500 text-3xs sm:text-2xs">
        <th className="max-sm:w-[209px] w-[231px] p-0 font-medium text-start flex items-center sm:gap-[5px] max-sm:justify-between">
          <span className={`leading-none ${win ? "text-blue" : "text-red"}`}>
            {win ? "Victory" : "Defeat"}
          </span>

          <div className="flex items-center gap-1">
            <div
              className={`size-1 rounded-full aspect-square ${
                teamSide === 100 ? "bg-blue" : "bg-red"
              }`}
            />

            <span className="leading-none">
              {teamSide === 100 ? "Blue" : "Red"} Team
            </span>
          </div>

          <span className="sm:hidden">Rank / Score</span>
        </th>

        <th className="flex items-center justify-center w-16 p-0 font-medium max-sm:hidden">
          Score / Rank
        </th>

        <th className="flex items-center justify-center w-24 p-0 font-medium max-500:w-16 max-800:w-[72px]">
          KDA
        </th>

        <th className="p-0 max-380:hidden max-800:w-[50px] max-400:w-10 w-[106px] font-medium flex items-center justify-center">
          Damage
        </th>

        <th className="items-center justify-center hidden p-0 w-[46px] font-medium max-500:flex">
          C / V / G
        </th>

        <th className="flex items-center justify-center p-0 font-medium max-500:hidden w-9">
          CS
        </th>

        <th className="flex items-center justify-center p-0 font-medium max-500:hidden w-9">
          Wards
        </th>

        <th className="flex items-center justify-center p-0 font-medium max-500:hidden w-9">
          Gold
        </th>
      </tr>
    </thead>
  );
}
