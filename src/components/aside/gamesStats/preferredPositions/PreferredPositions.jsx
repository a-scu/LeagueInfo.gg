import Position from "./Position";

import Top from "@/components/icons/lanes/Top";
import Jungle from "@/components/icons/lanes/Jungle";
import Middle from "@/components/icons/lanes/Middle";
import Bottom from "@/components/icons/lanes/Bottom";
import Utility from "@/components/icons/lanes/Utlity";

const PreferredPositions = ({ positions, games, fetchingGamesStats }) => {
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
      pct: getPct(TOP) || 0,
      Icon: Top,
    },
    {
      position: "JUNGLE",
      games: JUNGLE ?? 0,
      pct: getPct(JUNGLE) || 0,
      Icon: Jungle,
    },
    {
      position: "MIDDLE",
      games: MIDDLE ?? 0,
      pct: getPct(MIDDLE) || 0,
      Icon: Middle,
    },
    {
      position: "BOTTOM",
      games: BOTTOM ?? 0,
      pct: getPct(BOTTOM) || 0,
      Icon: Bottom,
    },
    {
      position: "UTILITY",
      games: UTILITY ?? 0,
      pct: getPct(UTILITY) || 0,
      Icon: Utility,
    },
  ];

  const getPreferredPosition = () => {
    let summonerPlayedPositions = 0;
    let maxGames = 0;
    let preferredPosition;

    for (let i = 0; i < POSITIONS.length; i++) {
      const position = POSITIONS[i];
      if (position.games > maxGames) {
        maxGames = position.games;
        preferredPosition = position;
        summonerPlayedPositions += position.games;
      }
    }

    if (!summonerPlayedPositions) preferredPosition = POSITIONS[2];

    return preferredPosition;
  };

  const preferredPosition = getPreferredPosition();

  return (
    <div
      className={`flex flex-col items-center gap-2 1126:pr-2 1126:py-2 ${
        !fetchingGamesStats && !preferredPosition.games ? "opacity-50" : ""
      } ${fetchingGamesStats && ""} `}
    >
      {!fetchingGamesStats ? (
        <span className="text-xs text-center max-500:text-2xs text-gray-6">Preferred Position</span>
      ) : (
        <div className="h-4 max-500:h-3.5 flex items-center w-full">
          <div className="w-full bg-gray-2 rounded-full max-500:h-1.5 h-2" />
        </div>
      )}

      <div className="flex flex-col items-center justify-center h-full gap-2 max-360:hidden">
        <div className="flex gap-2">
          {POSITIONS.map(({ position, games, pct, Icon }) => (
            <Position
              fetchingGamesStats={fetchingGamesStats}
              key={position}
              games={games}
              pct={pct}
              Icon={Icon}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full gap-1 360:hidden">
        <preferredPosition.Icon
          loading={fetchingGamesStats}
          className={`size-8 ${
            fetchingGamesStats ? "opacity-50 text-gray-2 rounded-sm" : "text-gray-6"
          }`}
        />

        <div className="h-4 justify-center max-500:h-3.5 flex items-center w-full">
          <div className="w-6 bg-gray-2 rounded-full max-500:h-1.5 h-2" />
        </div>
      </div>
    </div>
  );
};

export default PreferredPositions;
