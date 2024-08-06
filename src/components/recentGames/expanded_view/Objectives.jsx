import Baron from "@/components/icons/Baron";
import Dragon from "@/components/icons/Dragon";
import Herald from "@/components/icons/Herald";
import VoidGrub from "@/components/icons/VoidGrub";
import Tower from "@/components/icons/Tower";
import Inhibitor from "@/components/icons/Inhibitor";

export default function Objectives({ win, objectives }) {
  const { baron, dragon, riftHerald, horde, tower, inhibitor } = objectives;

  const render = [
    {
      Icon: Baron,
      name: "Baron",
      kills: baron?.kills || 0,
    },
    {
      Icon: Dragon,
      name: "Dragon",
      kills: dragon?.kills || 0,
    },
    {
      Icon: Herald,
      name: "Herald",
      kills: riftHerald?.kills || 0,
    },
    {
      Icon: VoidGrub,
      name: "VoidGrub",
      kills: horde?.kills || 0,
    },
    {
      Icon: Tower,
      name: "Tower",
      kills: tower?.kills || 0,
    },
    {
      Icon: Inhibitor,
      name: "Inhibitor",
      kills: inhibitor?.kills || 0,
    },
  ];

  return (
    <tr className="flex gap-1 max-sm:gap-0.5">
      {render.map(({ Icon, name, kills }) => (
        <td key={name} className={`flex items-center bg-main-3 rounded-sm p-0.5 max-sm:p-px`}>
          <Icon
            className={`aspect-square ${win ? "text-blue" : "text-red"} size-3 max-sm:size-2.5`}
          />{" "}
          <span className="w-4 text-xs font-normal leading-none text-center max-sm:text-2xs text-gray-6">
            {kills || 0}
          </span>
        </td>
      ))}
    </tr>
  );
}
