import { useStore } from "@nanostores/react";
import { $fetchingSummoner, $summoner } from "@/js/store";

import Loading from "../icons/Loading";

export default function Banner() {
  const fetchingSummoner = useStore($fetchingSummoner);
  const summoner = useStore($summoner) || {};

  if (!fetchingSummoner && !summoner) return <span>error fetching summoner</span>;

  return (
    <div
      className={`flex flex-col items-center w-full p-2 pt-4 text-center bg-gray-1 ${
        fetchingSummoner && "animate-pulse"
      }`}
    >
      {fetchingSummoner ? (
        <Loading className="fill-gray-1 bg-gray-3/75 border-4 rounded-full size-20 max-500:size-[72px] aspect-square border-gray-2" />
      ) : (
        <img
          alt=""
          loading="lazy"
          src={summoner.profileIcon}
          className="size-[72px] 500:size-20 rounded-full bg-gray-3 border-4 border-gray-2"
        />
      )}

      {fetchingSummoner ? (
        <span className="px-2 mt-1.5 py-0.5 bg-gray-3/75 rounded-full max-500:text-2xs text-center text-xs text-transparent">
          00
        </span>
      ) : (
        <span className="max-500:text-2xs text-center text-xs px-2 mt-1.5 py-0.5 text-white bg-gray-3 rounded-full">
          {summoner.summonerLevel}
        </span>
      )}

      {fetchingSummoner ? (
        <span className="text-xl font-bold max-500:text-base text-gray-5">···</span>
      ) : (
        <span className="text-xl font-bold max-500:text-base text-white">
          {summoner.gameName} <span className="font-normal text-gray-6">#{summoner.tagLine}</span>
        </span>
      )}
    </div>
  );
}
