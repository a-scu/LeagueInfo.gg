import Champion from "./Champion";

const PlayedChampions = ({ champions, fetchingGamesStats }) => {
  if (fetchingGamesStats)
    return (
      <div className="flex flex-col gap-2 border-t-gray-3 1126:p-2 1126:col-span-2 1126:pt-2 1126:border-t max-1126:items-end">
        <div className="flex flex-col gap-2 1126:col-span-2 max-1126:items-end ">
          <div className="h-4 max-500:h-3.5 flex items-center w-full justify-center">
            <div className="max-500:w-[100px] w-40 bg-gray-2 rounded-full max-500:h-1.5 h-2" />
          </div>

          <div
            id="playedChampions"
            className="flex items-center justify-center w-full h-full gap-2 1126:gap-4 max-0:items-center max-0:justify-end max-1126:flex-col max-1126:items-end max-0:flex-row"
          >
            <Champion fetchingGamesStats={fetchingGamesStats} />
            <Champion fetchingGamesStats={fetchingGamesStats} />
          </div>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col gap-2 border-t-gray-3 1126:p-2 1126:col-span-2 1126:pt-2 1126:border-t max-1126:items-end">
      <span className="text-xs text-center max-500:text-2xs max-1126:text-end text-gray-6">
        Most Played <span className="max-500:hidden">Champions</span>
      </span>

      <div
        id="playedChampions"
        className="flex items-center justify-center w-full h-full gap-2 1126:gap-4 max-0:items-center max-0:justify-end max-1126:flex-col max-1126:items-end max-0:flex-row"
      >
        {Object.keys(champions)
          .map((key) => champions[key])
          .sort((a, b) => b.games - a.games)
          .slice(0, 2)
          .map((champion) => champion && <Champion key={champion.name} champion={champion} />)}
        {/* {Object.keys(champions).length === 1 && (
          <Champion fetchingGamesStats={true} skeleton={true} />
        )} */}
      </div>
    </div>
  );
};

export default PlayedChampions;
