export default function Damage({
  win,
  gameTopDamage,
  gameTopDamageTaken,
  damageToChampions,
  damageTaken,
}) {
  const formatDamage = (damage) => {
    if (damage < 1000) {
      return damage;
    } else if (damage < 10000) {
      return (damage / 1000).toFixed(3).replace(".", ",");
    } else if (damage < 1000000) {
      return (damage / 1000).toFixed(3).replace(".", ",");
    }
  };

  const dmgPct =
    50 - ((gameTopDamage - damageToChampions) / gameTopDamage) * 50;

  const responsiveDmgPct =
    40 - ((gameTopDamage - damageToChampions) / gameTopDamage) * 40;

  const dmgTakenPct =
    50 - ((gameTopDamageTaken - damageTaken) / gameTopDamageTaken) * 50;

  const responsiveDmgTakenPct =
    40 - ((gameTopDamageTaken - damageTaken) / gameTopDamageTaken) * 40;

  return (
    <td className="p-0 max-380:hidden">
      <div className="flex max-800:hidden gap-1.5 text-center text-2xs dark:text-dg-500 text-lg-500">
        <div className="w-[50px] min-w-[50px] gap-1 flex flex-col">
          <span>{formatDamage(damageToChampions)}</span>
          <div className="w-full relative h-1.5 bg-main-4 dark:bg-main-2">
            <div
              style={{ width: dmgPct }}
              className={`h-1.5 ${
                win ? "bg-lb-500 dark:bg-db-500" : "bg-lr-500 dark:bg-dr-500"
              }`}
            />
          </div>
        </div>

        <div className="w-[50px] min-w-[50px] gap-1 flex flex-col">
          <span>{formatDamage(damageTaken)}</span>
          <div className="w-full relative h-1.5 bg-main-4 dark:bg-main-2">
            <div
              style={{ width: dmgTakenPct }}
              className="h-1.5  bg-lg-500 dark:bg-dg-400"
            />
          </div>
        </div>
      </div>

      <div className="flex-col max-400:hidden 800:hidden gap-1.5 flex text-3xs">
        <div className="w-[50px] min-w-[50px] flex">
          <div className="relative flex w-full items-center h-[12px] bg-main-4 dark:bg-main-2">
            <span className="absolute left-0.5 text-white line-clamp-1">
              {formatDamage(damageToChampions)}
            </span>
            <div
              style={{ width: dmgPct }}
              className={`h-[12px] ${
                win ? "bg-lb-500 dark:bg-db-500" : "bg-lr-500 dark:bg-dr-500"
              }`}
            />
          </div>
        </div>

        <div className="w-[50px] min-w-[50px] flex">
          <div className="relative flex w-full items-center h-[12px] bg-main-4 dark:bg-main-2">
            <span className="absolute left-0.5 text-white line-clamp-1">
              {formatDamage(damageTaken)}
            </span>
            <div
              style={{ width: dmgTakenPct }}
              className="h-[12px] bg-lg-500 dark:bg-dg-400"
            />
          </div>
        </div>
      </div>

      <div className="flex-col hidden gap-1.5 max-400:flex text-3xs">
        <div className="flex w-10 min-w-10">
          <div className="relative flex w-full items-center h-[12px] bg-main-4 dark:bg-main-2">
            <span className="absolute left-0.5 text-white line-clamp-1">
              {formatDamage(damageToChampions)}
            </span>
            <div
              style={{ width: responsiveDmgPct }}
              className={`h-[12px] ${
                win ? "bg-lb-500 dark:bg-db-500" : "bg-lr-500 dark:bg-dr-500"
              }`}
            />
          </div>
        </div>

        <div className="flex w-10 min-w-10">
          <div className="relative flex w-full items-center h-[12px] bg-main-4 dark:bg-main-2">
            <span className="absolute left-0.5 text-white line-clamp-1">
              {formatDamage(damageTaken)}
            </span>
            <div
              style={{ width: responsiveDmgTakenPct }}
              className="h-[12px] bg-lg-500 dark:bg-dg-400"
            />
          </div>
        </div>
      </div>
    </td>
  );
}
