import type { APIRoute } from "astro";

const API_KEY = import.meta.env.RIOT_API_KEY;

// #region GET SUMMONER DATA

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const region = url.searchParams.get("region");
    const search = url.searchParams.get("search");
    const ddragonVersion = url.searchParams.get("ddragonVersion");

    if (!search) throw Error("Search is empty");
    if (!ddragonVersion) throw Error("Ddragon version missing");

    const [name, tag] = search.split("-");

    if (!name || !tag) throw Error("Summoner name or tag not provided");

    const accountData = await getAccountByNameAndTag(region, name, tag);
    const summonerData = await getSummonerByPuuid(region, accountData.puuid);

    const summoner = { ...accountData, ...summonerData };

    summoner.profileIcon = `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/img/profileicon/${summoner.profileIconId}.png`;

    return new Response(JSON.stringify(summoner), {
      status: 200,
      statusText: "Ok",
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(error, {
      status: 400,
      statusText: error,
    });
  }
};

// #region GET ACCOUNT BY NAME AND TAG

const getAccountByNameAndTag = async (region, name, tag) => {
  let searchRegion = "";

  if (region === "las") searchRegion = "americas";

  const res = await fetch(
    `https://${searchRegion}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/${tag}?api_key=${API_KEY}`
  );

  if (!res.ok) throw Error("Error fetching account by name and tag");

  return await res.json();
};

// #region GET SUMMONER BY PUUID

const getSummonerByPuuid = async (region, puuid) => {
  let searchRegion = "";

  if (region === "las") searchRegion = "la2";

  const res = await fetch(
    `https://${searchRegion}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${API_KEY}`
  );

  if (!res.ok) throw Error("Error fetching summoner by puuid");

  return await res.json();
};
