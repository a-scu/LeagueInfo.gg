import Close from "../icons/Close";
import Star from "../icons/Star";

const recents = [
  { name: "Totita #117", region: "las" },
  { name: "Winnux #211", region: "br" },
  { name: "elchorizero12 #aura", region: "las" },
  { name: "elchorizero12 #aura", region: "las" },
  { name: "jon love #joao", region: "br" },
];

const favorites = [
  { name: "Totita #117", region: "las" },
  { name: "Winnux #211", region: "br" },
  { name: "elchorizero12 #aura", region: "las" },
  { name: "elchorizero12 #aura", region: "las" },
  { name: "jon love #joao", region: "br" },
  { name: "jon love #joao", region: "br" },
];

const SearchSuggestions = ({ handleSearch }) => {
  return (
    <div className="absolute left-0 right-0 top-full z-50 flex bg-gray-8 shadow-md border border-gray-2 rounded-b-md max-h-[232px]">
      {/* Recent */}
      <div className="flex flex-col flex-1 p-2 pt-1.5 overflow-auto scroll-hidden">
        <span className="p-2 text-sm font-medium text-white">Recents</span>

        <div className="flex flex-col flex-1">
          {recents.map((summoner) => (
            <Summoner listType="recents" handleSearch={handleSearch} {...summoner} />
          ))}
        </div>
      </div>

      {/* Favorites */}
      <div className="flex flex-col flex-1 p-2 pt-1.5 overflow-auto scroll-hidden">
        <span className="p-2 text-sm font-medium text-white">Favorites</span>

        <div className="flex flex-col flex-1">
          {favorites.map((summoner) => (
            <Summoner listType="favorites" handleSearch={handleSearch} {...summoner} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Summoner = ({ handleSearch, name, region, listType }) => {
  const handleFavorite = (e) => {
    e.stopPropagation();
    console.log("Favorite");
  };

  const handleRemove = (e) => {
    e.stopPropagation();
  };

  return (
    <button
      className="p-2 hover:bg-gray-1 cursor-pointer rounded flex gap-2 items-center"
      onClick={(e) => handleSearch(e, "Winnux #211", "br")}
    >
      <div className="gap-0.5 flex bg-blue rounded py-0.5 px-1">
        <span className="text-white text-2xs font-bold">{region.toUpperCase()}</span>{" "}
      </div>

      <span className="text-sm text-left text-white">{name}</span>

      <div className="flex gap-2 ml-auto items-center relative left-1">
        <button onClick={handleFavorite} className="group border-gray-6">
          <Star
            className={`size-4 ${
              listType === "favorites"
                ? "fill-gold stroke-gold"
                : "group-hover:stroke-gold fill-transparent stroke-gray-6"
            }`}
          />
        </button>

        {listType === "recents" && (
          <button onClick={handleRemove} className="group border-gray-6">
            <Close className="size-[18px] top-px relative group-hover:fill-gray-5 group-hover:text-gray-5 group-hover:stroke-gray-5 fill-gray-6 text-gray-6 stroke-gray-6" />
          </button>
        )}
      </div>
    </button>
  );
};

export default SearchSuggestions;
