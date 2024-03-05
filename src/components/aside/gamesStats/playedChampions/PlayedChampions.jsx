import Champion from "./Champion";

const PlayedChampions = ({ champions }) => {
  return (
    <div className="flex flex-col w-full gap-px">
      {Object.keys(champions).map((key) => (
        <Champion key={champions[key].name} champion={champions[key]} />
      ))}
    </div>
  );
};

export default PlayedChampions;
