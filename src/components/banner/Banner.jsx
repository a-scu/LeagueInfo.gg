import { useStore } from "@nanostores/react";
import { $fetchingRankedData, $fetchingSummoner, $rankedData, $summoner } from "@/js/store";
import Las from "../icons/regions/Las";
import Star from "../icons/Star";
import { useState } from "react";
import riot_logo from "../../assets/images/riot-logo.png";

export default function Banner() {
  const fetchingSummoner = useStore($fetchingSummoner);
  const summoner = useStore($summoner) || {};
  const fetchingRankedData = useStore($fetchingRankedData);
  const rankedData = useStore($rankedData) || {};

  const [favorite, setFavorite] = useState(false);

  if (fetchingSummoner)
    return (
      <div className="bg-gray-1">
        <div className=" flex flex-col items-center w-full p-2 pt-4 text-center animate-pulse">
          <div className="bg-gray-2 border-4 rounded-full size-[88px] max-500:size-[80px] aspect-square border-gray-2 " />

          <span className="px-2 mt-1.5 py-0.5 bg-gray-2 rounded-full max-500:text-2xs text-center text-xs text-transparent ">
            00
          </span>

          <div className="h-7 max-500:h-6 flex items-center justify-center">
            <div className="w-10 bg-gray-2 rounded-full max-500:h-3 h-3.5" />
          </div>
        </div>
      </div>
    );

  if (!fetchingSummoner && !summoner) return <span>error fetching summoner</span>;

  const { highestRank } = rankedData || {};

  const tier = highestRank ? rankedData[highestRank]?.tier : null;

  const borderColor = !tier
    ? ""
    : tier === "CHALLENGER"
    ? "border-challenger"
    : tier === "GRANDMASTER"
    ? "border-grandmaster"
    : tier === "MASTER"
    ? "border-master"
    : tier === "DIAMOND"
    ? "border-diamond"
    : tier === "EMERALD"
    ? "border-emerald"
    : tier === "PLATINUM"
    ? "border-platinum"
    : tier === "GOLD"
    ? "border-gold"
    : tier === "SILVER"
    ? "border-silver"
    : tier === "BRONZE"
    ? "border-bronze"
    : "border-[#47433f]";

  return (
    <div className="flex justify-center items-center w-full p-2 pt-4 bg-gray-1 mt-">
      <div className="flex-row flex justify-evenly w-full max-w-screen-md text-center">
        {/*  */}
        <div className="flex-row flex-1 gap-1 items-center justify-center flex">
          <Las className={"size-5-5 text-gray-6"} />
          <span className="text-xs text-gray-6">LAS</span>
        </div>

        {/*  */}
        <div className="flex flex-col items-center text-center">
          {/* <div className="rounded-full border-2 border-blue"> */}
          <img
            alt=""
            loading="lazy"
            src={summoner.profileIcon}
            className={`size-[80px] 500:size-[88px] rounded-full bg-gray-3 border border-gray-3`}
          />
          {/* </div> */}

          <span className="max-500:text-2xs text-center text-xs px-2 mt-1.5 py-0.5 text-white bg-gray-3 border border-gray-2 rounded-full">
            {summoner.summonerLevel}
          </span>

          <span className="text-xl font-bold max-500:text-base text-white">
            {summoner.gameName} <span className="font-normal text-gray-6">#{summoner.tagLine}</span>
          </span>

          <button
            type="button"
            onClick={() => {}}
            className="rounded flex gap-1.5 items-center max-500:mt-1 hover:text-riot justify-center max-500:p-1 max-500:text-2xs mt-1.5 border bg-gray-2 border-gray-3 text-white text-xs p-1.5"
          >
            <span>Link with Riot</span>

            <img src={riot_logo.src} className="size-4 max-500:size-3.5" />
          </button>
        </div>

        {/*  */}
        <div className="flex-1 items-center justify-center flex relative">
          <button
            type="button"
            onClick={() => setFavorite(!favorite)}
            className={`border group hover:border-gold rounded-full p-[5px] bg-gray-1 ${
              favorite ? "border-gold" : "border-gray-6"
            }`}
          >
            <Star
              className={`size-4 group-hover:stroke-gold ${
                favorite ? "fill-gold stroke-gold" : "stroke-gray-6 fill-transparent"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
