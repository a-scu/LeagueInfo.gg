import { useEffect } from "react";

import { useStore } from "@nanostores/react";
import {
  $fetchingSummoner,
  setFetchingSummoner,
  $summoner,
  setSummoner,
  setFetchingJsons,
  setJsons,
  setFetchingRankedData,
  setRankedData,
  setFetchingRecentGames,
  setRecentGames,
  setFetchingGamesStats,
  setGamesStats,
} from "@/js/store";

import processGameData from "@/js/processGameData";
import Banner from "./banner/Banner";
import Aside from "./aside/Aside";
import RecentGames from "./recentGames/RecentGames";
import getGamesStats from "@/js/getGamesStats";

export default function SummonerPage({ search, initialRegion }) {
  const summoner = useStore($summoner);

  useEffect(() => {
    if (summoner) return;

    // region GET JSONS

    const handleGetJsons = async () => {
      try {
        const res = await fetch("/api/getJsons");
        if (!res.ok) throw Error(res.statusText);
        const jsons = await res.json();

        console.log("Jsons:", jsons);
        setJsons(jsons);
        setFetchingJsons(false);

        return jsons;
      } catch (error) {
        console.log("Error fetching jsons:", error);
      } finally {
        setFetchingJsons(false);
      }
    };

    // region GET SUMMONER DATA

    const getSummonerData = async (ddragonVersion) => {
      try {
        const res = await fetch(
          `/api/getSummoner/?region=${initialRegion}&search=${search}&ddragonVersion=${ddragonVersion}`
        );
        if (!res.ok) throw Error(res.statusText);
        const summoner = await res.json();

        console.log("Summoner Data:", summoner);
        setSummoner(summoner);

        return summoner;
      } catch (error) {
        console.error("Error fetching summoner data:", error);
      } finally {
        setFetchingSummoner(false);
      }
    };

    // region GET RANKED DATA

    const getRankedData = async (summonerId) => {
      try {
        const res = await fetch(
          `/api/getRankedData?region=${initialRegion}&summonerId=${summonerId}`
        );
        if (!res.ok) throw Error(res.statusText);
        const rankedData = await res.json();

        console.log("Ranked Data:", rankedData);
        setRankedData(rankedData);

        return rankedData;
      } catch (error) {
        console.log("Error fetching ranked data:", error);
      } finally {
        setFetchingRankedData(false);
      }
    };

    // region GET RECENT GAMES

    const getRecentGames = async (puuid, jsons, rankedData) => {
      try {
        const count = 5;

        const res = await fetch(
          `/api/getRecentGames?region=${initialRegion}&puuid=${puuid}&count=${count}`
        );
        if (!res.ok) throw Error(res.statusText);
        const recentGames = await res.json();

        console.log("Recent Games:", recentGames);

        const processedRecentGames = await Promise.all(
          recentGames.map(
            async (game) => await processGameData(puuid, game, jsons, rankedData, initialRegion)
          )
        );

        console.log("Processed Recent Games:", processedRecentGames);
        setRecentGames(processedRecentGames);

        const gamesStats = getGamesStats(processedRecentGames);
        setGamesStats(gamesStats);
      } catch (error) {
        console.log("Error fetching recent games:", error);
      } finally {
        setFetchingRecentGames(false);
        setFetchingGamesStats(false);
      }
    };

    // region GET ALL DATA

    const getAllData = async () => {
      const jsons = await handleGetJsons();
      const summoner = await getSummonerData(jsons.ddragonVersion);
      const rankedData = await getRankedData(summoner.id);
      const recentGames = await getRecentGames(summoner.puuid, jsons, rankedData);
    };

    getAllData();
  }, [summoner]);

  // region RETURN

  return (
    <div className="flex flex-col gap-2">
      <Banner region={initialRegion} />
      <div className="flex max-1126:mx-auto max-1126:max-w-[768px] flex-col max-1126:w-full 1126:mx-auto 1126:grid grid-cols-[320px,768px] gap-2">
        <Aside />
        <RecentGames />
      </div>
    </div>
  );
}
