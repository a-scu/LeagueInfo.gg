import type { APIRoute } from "astro";

import { getWinRate } from "@/js/tools";

const API_KEY = import.meta.env.RIOT_API_KEY;

import IRON from "@/assets/images/rankedEmblems/iron.png";
import BRONZE from "@/assets/images/rankedEmblems/bronze.png";
import SILVER from "@/assets/images/rankedEmblems/silver.png";
import GOLD from "@/assets/images/rankedEmblems/gold.png";
import PLATINUM from "@/assets/images/rankedEmblems/platinum.png";
import EMERALD from "@/assets/images/rankedEmblems/emerald.png";
import DIAMOND from "@/assets/images/rankedEmblems/diamond.png";
import MASTER from "@/assets/images/rankedEmblems/master.png";
import GRANDMASTER from "@/assets/images/rankedEmblems/grandmaster.png";
import CHALLENGER from "@/assets/images/rankedEmblems/challenger.png";

const RANKED_EMBLEMS = {
  IRON,
  BRONZE,
  SILVER,
  GOLD,
  PLATINUM,
  EMERALD,
  DIAMOND,
  MASTER,
  GRANDMASTER,
  CHALLENGER,
};

// #region GET RANKED DATA

export const GET: APIRoute = async ({ params }) => {
  try {
    const { summonerId } = params;

    const res = await fetch(
      `https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${API_KEY}`
    );

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Error fetching ranked data: ${errorText}`);
    }

    const rankedData = await res.json();

    if (!rankedData.length) {
      return new Response(JSON.stringify({ error: "No ranked data found" }), {
        status: 404,
        statusText: "Not Found",
        headers: { "Content-Type": "application/json" },
      });
    }

    let solo = rankedData.find(({ queueType }) => queueType === "RANKED_SOLO_5x5");
    let flex = rankedData.find(({ queueType }) => queueType === "RANKED_FLEX_SR");

    if (solo) solo = getRankData(solo);
    if (flex) flex = getRankData(flex);

    let highestRank;
    if (solo && flex) {
      highestRank = getHighestRank(solo, flex);
    } else if (solo) {
      highestRank = "solo";
    } else if (flex) {
      highestRank = "flex";
    }

    return new Response(
      JSON.stringify({
        solo,
        flex,
        highestRank,
      }),
      {
        status: 200,
        statusText: "Ok",
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      statusText: "Internal Server Error",
      headers: { "Content-Type": "application/json" },
    });
  }
};

// #region GET RANK DATA

const getRankData = ({ tier, rank, wins, losses, leaguePoints }) => {
  if (tier !== "MASTER" && tier !== "GRANDMASTER" && tier !== "CHALLENGER") {
    if (rank === "I") {
      rank = 1;
    } else if (rank === "II") {
      rank = 2;
    } else if (rank === "III") {
      rank = 3;
    } else if (rank === "IV") {
      rank = 4;
    }
  } else {
    rank = null;
  }

  const winrate = getWinRate(wins, losses);

  const emblem = RANKED_EMBLEMS[tier].src;

  return {
    tier,
    rank,
    games: wins + losses,
    wins,
    losses,
    winrate,
    points: leaguePoints,
    emblem,
  };
};

// #region GET HIGHEST RANK

const getHighestRank = (solo, flex) => {
  const rankOrder = {
    CHALLENGER: 10,
    GRANDMASTER: 9,
    MASTER: 8,
    DIAMOND: 7,
    EMERALD: 6,
    PLATINUM: 5,
    GOLD: 4,
    SILVER: 3,
    BRONZE: 2,
    IRON: 1,
  };

  const soloTier = solo.tier;
  const flexTier = flex.tier;
  const soloRank = solo.rank;
  const flexRank = flex.rank;

  if (!soloTier && flexTier) return "solo";

  if (soloTier && !flexTier) return "flex";

  if (rankOrder[soloTier] > rankOrder[flexTier]) return "solo";
  if (rankOrder[soloTier] < rankOrder[flexTier]) return "flex";
  return soloRank > flexRank ? "solo" : soloRank < flexRank ? "flex" : 0;
};
