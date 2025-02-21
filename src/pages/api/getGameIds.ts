import { getRegionMatches } from "@/js/getRegion";
import type { APIRoute } from "astro";

const API_KEY = import.meta.env.RIOT_API_KEY;

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const region = url.searchParams.get("region");
    const puuid = url.searchParams.get("puuid");
    const count = url.searchParams.get("count");
    const startTime = url.searchParams.get("startTime");
    const queue = url.searchParams.get("queue");
    const type = url.searchParams.get("type");

    if (!region) throw Error("Region not specified");
    if (!puuid) throw Error("Puuid missing");
    if (!count) throw Error("Games to fetch not specified");

    const searchRegion = getRegionMatches(region);

    const res = await fetch(
      `https://${searchRegion}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?` +
        (startTime ? `startTime=${startTime}&` : "") +
        (queue ? `queue=${queue}&` : "") +
        (type ? `type=${type}&` : "") +
        `start=0&count=${count}&api_key=${API_KEY}`
    );

    if (!res.ok) throw Error("Error fetching game ids");

    const gameIds = await res.json();

    return new Response(JSON.stringify(gameIds), {
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
