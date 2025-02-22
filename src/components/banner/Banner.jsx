import { useStore } from "@nanostores/react";
import { $fetchingRankedData, $fetchingSummoner, $rankedData, $summoner } from "@/js/store";
import Star from "../icons/Star";
import { useState } from "react";
import riot_logo from "../../assets/images/riot-logo.png";
import Las from "../icons/regions/Las";
import Br from "../icons/regions/Br";
import Me from "../icons/regions/Me";
import Sea from "../icons/regions/Sea";
import Tr from "../icons/regions/Tr";
import Ru from "../icons/regions/Ru";
import Oce from "../icons/regions/Oce";
import Na from "../icons/regions/Na";
import Lan from "../icons/regions/Lan";
import Kr from "../icons/regions/Kr";
import Jp from "../icons/regions/Jp";
import Euw from "../icons/regions/Euw";
import Eun from "../icons/regions/Eun";
import Vn from "../icons/regions/Vn";
import Tw from "../icons/regions/Tw";

const REGION_ICONS = {
  br: Br,
  eun: Eun,
  euw: Euw,
  jp: Jp,
  kr: Kr,
  lan: Lan,
  las: Las,
  me: Me,
  na: Na,
  oce: Oce,
  ru: Ru,
  sea: Sea,
  tr: Tr,
  tw: Tw,
  vn: Vn,
};

export default function Banner({ region }) {
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

  const RegionIcon = REGION_ICONS[region];

  return (
    <div className="flex justify-center relative items-center w-full p-2 pt-4 bg-gray-1 mt-">
      {/* <button
        type="button"
        onClick={() => {}}
        className="rounded absolute right-4 top-4 flex gap-1.5 items-center max-500:right-3 max-500:top-3 hover:border-riot hover:text-white justify-center border bg-gray-2 border-gray-3 text-white text-xs p-1.5"
      >
        <span>Link with Riot</span>

        <img src={riot_logo.src} className="size-4 max-500:size-3.5" />
      </button> */}

      <div className="flex-row flex justify-evenly w-full max-w-screen-md text-center">
        {/*  */}
        <div className="flex-row flex-1 gap-1 items-center justify-center flex">
          <RegionIcon className={"size-5-5 text-gray-6"} />
          <span className="text-xs text-gray-6">{region.toUpperCase()}</span>
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
