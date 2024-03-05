import Position from "./Position";

import Top from "@/components/icons/lanes/Top";
import Jungle from "@/components/icons/lanes/Jungle";
import Middle from "@/components/icons/lanes/Middle";
import Bottom from "@/components/icons/lanes/Bottom";
import Utility from "@/components/icons/lanes/Utlity";

const PreferredPositions = ({ positions, games }) => {
  const getPct = (number) => {
    if (!number) return 0;
    if (number === games) return 100;

    return (number / games) * 100;
  };

  const { TOP, JUNGLE, MIDDLE, BOTTOM, UTILITY } = positions;

  const POSITIONS = [
    {
      position: "TOP",
      games: TOP ?? 0,
      pct: getPct(TOP),
      Icon: Top,
    },
    {
      position: "JUNGLE",
      games: JUNGLE ?? 0,
      pct: getPct(JUNGLE),
      Icon: Jungle,
    },
    {
      position: "MIDDLE",
      games: MIDDLE ?? 0,
      pct: getPct(MIDDLE),
      Icon: Middle,
    },
    {
      position: "BOTTOM",
      games: BOTTOM ?? 0,
      pct: getPct(BOTTOM),
      Icon: Bottom,
    },
    {
      position: "UTILITY",
      games: UTILITY ?? 0,
      pct: getPct(UTILITY),
      Icon: Utility,
    },
  ];

  return (
    <div className="flex gap-2 pr-0.5">
      {POSITIONS.map(({ position, games, pct, Icon }) => (
        <Position key={position} games={games} pct={pct} Icon={Icon} />
      ))}
    </div>
  );
};

export default PreferredPositions;
