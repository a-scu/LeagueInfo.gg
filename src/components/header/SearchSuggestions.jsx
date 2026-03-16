import { useState } from "react";
import Close from "../icons/Close";
import Star from "../icons/Star";
import Recent from "../icons/Recent";

const recents = [
  { name: "Totita #117", region: "las" },
  { name: "Winnux #211", region: "br" },
  { name: "elchorizero12 #aura", region: "las" },
  { name: "elchorizero12 #aura", region: "las" },
  { name: "elchorizero12 #aura", region: "las" },
  { name: "elchorizero12 #aura", region: "las" },
];

const favorites = [
  { name: "Totita #117", region: "las" },
  { name: "Winnux #211", region: "br" },
  { name: "elchorizero12 #aura", region: "las" },
  { name: "elchorizero12 #aura", region: "las" },
  { name: "elchorizero12 #aura", region: "las" },
  { name: "elchorizero12 #aura", region: "las" },
];

const SearchSuggestions = ({ handleSearch, scrolled }) => {
  const [searchType, setSearchType] = useState("recents");

  if (!recents.length && !favorites.length) return null;

  return (
    <>
      {/* <=800 */}
      <div
        className={`absolute left-0 right-0 top-full flex-col hidden z-50 ${
          scrolled ? "w-full rounded-b-md" : "max-500:w-screen rounded-none"
        } max-800:flex bg-gray-8 shadow-lg overflow-hidden max-h-[200px]`}
      >
        <div className="flex p-1.5 pb-0 gap-1.5">
          <div
            className={`px-3 flex gap-1 items-center justify-center py-1.5  rounded bg-gray-4 flex-[4]`}
          >
            {searchType === "recents" ? (
              <Recent className="size-3-5 fill-white stroke-white text-white" />
            ) : (
              <Star className="size-3-5 fill-transparent stroke-white text-white relative" />
            )}

            <span className="text-center text-xs text-white">
              {searchType === "recents" ? "Recents" : "Favorites"}
            </span>
          </div>

          <button
            type="button"
            onClick={() =>
              setSearchType((searchType) =>
                searchType === "recents" ? "favorites" : "recents"
              )
            }
            className={`px-3 py-1.5 rounded flex-1 flex items-center justify-center bg-gray-1`}
          >
            {searchType === "recents" ? (
              <Star className="size-3-5 fill-transparent stroke-gray-6  text-gray-6" />
            ) : (
              <Recent className="size-3-5 fill-gray-6  stroke-gray-6 text-gray-6" />
            )}
          </button>
        </div>

        {/* Recent */}
        {searchType === "recents" && (
          <div
            className={`flex flex-col flex-1 overflow-auto thin-scroll gap-0 p-1.5 ${
              searchType === "recents" && recents.length > 5
                ? "mr-[5px] pr-[5px]"
                : searchType === "favorites" &&
                  favorites.length > 5 &&
                  "mr-[5px] pr-[5px]"
            }`}
          >
            {recents.map((summoner, i) => (
              <Summoner
                isFirst={i === 0}
                isLast={i === recents.length - 1}
                i={i}
                key={Math.random() * Date.now()}
                listType="recents"
                handleSearch={handleSearch}
                {...summoner}
              />
            ))}
          </div>
        )}

        {/* Favorites */}
        {searchType === "favorites" && (
          <div
            className={`flex flex-col flex-1 overflow-auto thin-scroll gap-0 p-1.5 ${
              searchType === "recents" && recents.length > 5
                ? "mr-[5px] pr-[5px]"
                : searchType === "favorites" &&
                  favorites.length > 5 &&
                  "mr-[5px] pr-[5px]"
            }`}
          >
            {favorites.map((summoner, i) => (
              <Summoner
                isFirst={i === 0}
                isLast={i === favorites.length - 1}
                i={i}
                key={Math.random() * Date.now()}
                listType="favorites"
                handleSearch={handleSearch}
                {...summoner}
              />
            ))}
          </div>
        )}
      </div>

      {/* >800 */}
      <div
        className={`absolute left-0 right-0 top-full z-50 flex bg-gray-8 shadow-md rounded-b-md overflow-hidden max-h-[200px] max-800:hidden ${
          recents.length > 5 && "gap-[5px]"
        }`}
      >
        {/* Recent */}
        {recents.length !== 0 && (
          <div className="flex flex-col flex-1 p-2 pr-0">
            <div className="flex mb-2 gap-1 items-center">
              <Recent className="size-3-5 fill-white stroke-white text-white" />
              <span className="text-xs text-white">Recents</span>
            </div>

            <div
              className={`flex flex-col flex-1 overflow-auto thin-scroll gap-0 ${
                recents.length > 5 && "pr-[5px]"
              }`}
            >
              {recents.map((summoner, i) => (
                <Summoner
                  isFirst={i === 0}
                  isLast={i === recents.length - 1}
                  i={i}
                  key={Math.random() * Date.now()}
                  listType="recents"
                  handleSearch={handleSearch}
                  {...summoner}
                />
              ))}
            </div>
          </div>
        )}

        {/* Favorites */}
        {favorites.length !== 0 && (
          <div className="flex flex-col flex-1 p-2 pl-0">
            <div className="flex mb-2 gap-1 items-center">
              <Star className="size-3-5 fill-transparent stroke-white text-white relative" />
              <span className="text-xs text-white">Favorites</span>
            </div>

            <div
              className={`flex flex-col flex-1 overflow-auto thin-scroll gap-0 ${
                favorites.length > 5 && "pr-[5px]"
              }`}
            >
              {favorites.map((summoner, i) => (
                <Summoner
                  isFirst={i === 0}
                  isLast={i === favorites.length - 1}
                  i={i}
                  key={Math.random() * Date.now()}
                  listType="favorites"
                  handleSearch={handleSearch}
                  {...summoner}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
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
      className={`p-2 max-500:p-1.5 hover:bg-gray-1 cursor-pointer flex gap-2 items-center rounded`}
      onClick={(e) => handleSearch(e, "Winnux #211", "br")}
    >
      <div className="gap-0.5 flex bg-blue rounded py-px max-500:py-0.5 px-[3px]">
        <span className="text-white text-2xs font-medium max-500:text-3xs">
          {region.toUpperCase()}
        </span>{" "}
      </div>

      <span className="text-xs max-500:text-2xs truncate text-left text-white">
        {name}
      </span>

      <div className="flex gap-2 ml-auto items-center relative left-1">
        {listType === "favorites" && (
          <div className="group border-gray-6 opacity-0">
            <Close className="size-4 top-px relative group-hover:fill-red group-hover:text-red group-hover:stroke-red fill-gray-6 text-gray-6 stroke-gray-6" />
          </div>
        )}

        <button onClick={handleFavorite} className="group border-gray-6">
          <Star
            className={`size-3-5 ${
              listType === "favorites"
                ? "fill-gold stroke-gold mr-0.5"
                : "group-hover:stroke-gold fill-transparent stroke-gray-6"
            }`}
          />
        </button>

        {listType === "recents" && (
          <button onClick={handleRemove} className="group border-gray-6">
            <Close className="size-4 top-px relative group-hover:fill-red group-hover:text-red group-hover:stroke-red fill-gray-6 text-gray-6 stroke-gray-6" />
          </button>
        )}
      </div>
    </button>
  );
};

export default SearchSuggestions;
