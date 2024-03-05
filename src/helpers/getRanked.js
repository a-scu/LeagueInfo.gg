import IRON from "@/assets/img/rankedEmblems/iron.png";
import BRONZE from "@/assets/img/rankedEmblems/bronze.png";
import SILVER from "@/assets/img/rankedEmblems/silver.png";
import GOLD from "@/assets/img/rankedEmblems/gold.png";
import PLATINUM from "@/assets/img/rankedEmblems/platinum.png";
import EMERALD from "@/assets/img/rankedEmblems/emerald.png";
import DIAMOND from "@/assets/img/rankedEmblems/diamond.png";
import MASTER from "@/assets/img/rankedEmblems/master.png";
import GRANDMASTER from "@/assets/img/rankedEmblems/grandmaster.png";
import CHALLENGER from "@/assets/img/rankedEmblems/challenger.png";
import { getWinRate } from "./tools";

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

const API_KEY = process.env.RIOT_API_KEY;

const getRanked = async (puuid) => {
  const res = await fetch(
    `https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/${puuid}?api_key=${API_KEY}`
  );
  const data = await res.json();

  let solo, flex;

  if (data.length) {
    solo = data.find(({ queueType }) => queueType === "RANKED_SOLO_5x5");
    flex = data.find(({ queueType }) => queueType === "RANKED_FLEX_SR");

    if (solo) {
      solo = getRank(solo);
    }
    if (flex) {
      flex = getRank(flex);
    }
  }

  // Comparación de rangos
  let highestRank = null;

  if (solo && flex) {
    if (compareRanks(solo, flex) === 1) {
      highestRank = solo;
    } else {
      highestRank = flex;
    }
  } else if (solo) {
    highestRank = solo;
  } else if (flex) {
    highestRank = flex;
  }

  return { solo, flex, highestRank };
};

const getRank = ({ tier, rank, wins, losses, leaguePoints }) => {
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

  const icon = RANKED_EMBLEMS[tier].src;

  return {
    tier,
    rank,
    wins,
    losses,
    winrate,
    points: leaguePoints,
    icon,
  };
};

// Función para comparar los rangos
const compareRanks = (rank1, rank2) => {
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

  // Si rank1 no tiene tier (es CHALLENGER, GRANDMASTER o MASTER), rank1 es mayor
  if (!rank1.tier && rank2.tier) {
    return 1;
  }
  // Si rank2 no tiene tier (es CHALLENGER, GRANDMASTER o MASTER), rank2 es mayor
  else if (rank1.tier && !rank2.tier) {
    return -1;
  }
  // Si ambos no tienen tier o ambos tienen tier, comparamos por tier y luego por rank
  else if ((!rank1.tier && !rank2.tier) || (rank1.tier && rank2.tier)) {
    if (rankOrder[rank1.tier] > rankOrder[rank2.tier]) {
      return 1;
    } else if (rankOrder[rank1.tier] < rankOrder[rank2.tier]) {
      return -1;
    } else {
      // Si los tiers son iguales, comparamos por rank
      return rank1.rank > rank2.rank ? 1 : rank1.rank < rank2.rank ? -1 : 0;
    }
  }
};

export default getRanked;
