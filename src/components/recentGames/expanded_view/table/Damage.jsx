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

  const dmgPct = 50 - ((gameTopDamage - damageToChampions) / gameTopDamage) * 50;

  const responsiveDmgPct = 40 - ((gameTopDamage - damageToChampions) / gameTopDamage) * 40;

  const dmgTakenPct = 50 - ((gameTopDamageTaken - damageTaken) / gameTopDamageTaken) * 50;

  const responsiveDmgTakenPct = 40 - ((gameTopDamageTaken - damageTaken) / gameTopDamageTaken) * 40;

  return (
    <td className="p-0 max-380:hidden">
      <div className="flex max-800:hidden gap-1.5 text-center text-2xs text-gray-6">
        <div className="w-[50px] min-w-[50px] gap-1 flex flex-col">
          <span>{formatDamage(damageToChampions)}</span>
          <div className="w-full relative h-1.5 bg-gray-2 rounded-sm overflow-hidden">
            <div
              style={{ width: dmgPct || 0 }}
              className={`h-1.5 ${win ? "bg-db-500" : "bg-dr-500"}`}
            />
          </div>
        </div>

        <div className="w-[50px] min-w-[50px] gap-1 flex flex-col">
          <span>{formatDamage(damageTaken)}</span>
          <div className="w-full relative h-1.5 bg-gray-2 rounded-sm overflow-hidden">
            <div style={{ width: dmgTakenPct || 0 }} className="h-1.5  bg-gray-5" />
          </div>
        </div>
      </div>

      <div className="flex-col max-400:hidden 800:hidden gap-1.5 flex text-3xs">
        <div className="w-[50px] min-w-[50px] flex rounded-sm overflow-hidden">
          <div className="relative flex w-full items-center h-[12px] bg-gray-2">
            <span
              className={`absolute left-0.5 ${
                +damageToChampions > 0 ? "text-white" : "text-gray-6"
              } line-clamp-1`}
            >
              {formatDamage(damageToChampions)}
            </span>
            <div
              style={{ width: dmgPct || 0 }}
              className={`h-[12px] ${win ? "bg-db-500" : "bg-dr-500"}`}
            />
          </div>
        </div>

        <div className="w-[50px] min-w-[50px] flex rounded-sm overflow-hidden">
          <div className="relative flex w-full items-center h-[12px] bg-gray-2">
            <span
              className={`absolute left-0.5 ${
                +damageTaken > 0 ? "text-white" : "text-gray-6"
              } line-clamp-1`}
            >
              {formatDamage(damageTaken)}
            </span>
            <div style={{ width: dmgTakenPct || 0 }} className="h-[12px] bg-gray-5" />
          </div>
        </div>
      </div>

      <div className="flex-col hidden gap-1.5 max-400:flex text-3xs">
        <div className="flex w-10 min-w-10 rounded-sm overflow-hidden">
          <div className="relative flex w-full items-center h-[12px] bg-gray-2">
            <span
              className={`absolute left-0.5 ${
                +damageToChampions > 0 ? "text-white" : "text-gray-6"
              } line-clamp-1`}
            >
              {formatDamage(damageToChampions)}
            </span>
            <div
              style={{ width: responsiveDmgPct || 0 }}
              className={`h-[12px] ${win ? "bg-db-500" : "bg-dr-500"}`}
            />
          </div>
        </div>

        <div className="flex w-10 min-w-10 rounded-sm overflow-hidden">
          <div className="relative flex w-full items-center h-[12px] bg-gray-2">
            <span
              className={`absolute left-0.5 ${
                +damageTaken > 0 ? "text-white" : "text-gray-6"
              } line-clamp-1`}
            >
              {formatDamage(damageTaken)}
            </span>
            <div style={{ width: responsiveDmgTakenPct || 0 }} className="h-[12px] bg-gray-5" />
          </div>
        </div>
      </div>
    </td>
  );
}
