import Champion from "./Champion";

const PlayedChampions = ({ champions, games }) => {
  return (
    <div className="flex flex-col gap-2 1126:p-2 1126:col-span-2 1126:border-t border-t-main-3 max-1126:items-end">
      <span className="text-xs text-center max-500:text-2xs max-1126:text-end text-main-6">
        Most Played <span className="max-500:hidden">Champions</span>
      </span>

      <div
        id="playedChampions"
        className="flex items-center justify-center w-full h-full gap-2 max-0:items-center max-0:justify-end max-1126:flex-col max-1126:items-end max-0:flex-row"
      >
        {Object.keys(champions)
          .slice(0, 2)
          .map((key) => (
            <Champion key={champions[key].name} champion={champions[key]} />
          ))}
      </div>
    </div>
  );
};

export default PlayedChampions;
