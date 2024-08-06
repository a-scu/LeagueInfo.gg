import Champion from "./Champion";

const PlayedChampions = ({ champions, fetchingGamesStats }) => {
  if (fetchingGamesStats)
    return (
      <div className="flex flex-col gap-2 border-t-gray-3 1126:p-2 1126:col-span-2 1126:pt-2 1126:border-t max-1126:items-end">
        <div className="flex flex-col gap-2 1126:col-span-2 max-1126:items-end ">
          <div className="text-xs text-center max-500:text-2xs text-transparent w-[100px] 500:w-[160px] 1126:w-1/2 mx-auto bg-gray-4 rounded">
            ···
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
          .map((champion) => (
            <Champion key={champion.name} champion={champion} />
          ))}
      </div>
    </div>
  );
};

export default PlayedChampions;
