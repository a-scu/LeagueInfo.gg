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

  // grid max-sm:grid-cols-[repeat(3,28px)] grid-cols-[repeat(3,32px)] grid-rows-2 gap-x-0.5 gap-y-1

  // bg-lg-200 dark:bg-dg-200

  return (
    <div className="flex rounded ">
      {render.map(({ Icon, name, kills }) => (
        <div
          key={name}
          className={`flex max-sm:w-[26px] w-7 rounded items-center justify-end ${
            name === "Tower" ? "gap-px" : "gap-0.5"
          }`}
        >
          <Icon
            className={`size-[11px] min-size-[11px] rounded-full ${
              win ? "text-lb-500 dark:text-db-500" : "text-red-500"
            } `}
          />{" "}
          <span className="font-normal text-black text-3xs dark:text-white max-sm:text-3xs ">
            {kills || 0}
          </span>
        </div>
      ))}
    </div>
  );
}
