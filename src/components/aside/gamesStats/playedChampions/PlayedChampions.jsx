import Champion from "./Champion";

const PlayedChampions = ({ champions, games }) => {
  return (
    <div className="flex flex-col gap-2 1126:pt-2 1126:col-span-2 1126:border-t border-t-main-4 max-1126:items-end max-500:w-24 max-1126:w-40">
      <span className="text-xs text-center max-500:text-2xs max-1126:text-end text-main-6">
        Most Played <span className="max-500:hidden">Champions</span>
      </span>

      <div
        id="playedChampions"
        className="flex items-center justify-center w-full h-full gap-2 max-500:items-center max-500:justify-end max-1126:flex-col max-1126:items-end max-500:flex-row max-500:w-24"
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
