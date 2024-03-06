import Champion from "./Champion";

const PlayedChampions = ({ champions }) => {
  return (
    <div id="playedChampions" className="flex flex-col w-full gap-px">
      {Object.keys(champions)
        .slice(0, 3)
        .map((key) => (
          <Champion key={champions[key].name} champion={champions[key]} />
        ))}
    </div>
  );
};

export default PlayedChampions;
