import type { APIRoute } from "astro";
import { getRegionMatches } from "@/js/getRegion";

const API_KEY = import.meta.env.RIOT_API_KEY;

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const region = url.searchParams.get("region");
    const gameId = url.searchParams.get("gameId");

    if (!region) throw Error("Region not specified");
    if (!gameId) throw Error("Game id missing");

    const searchRegion = getRegionMatches(region);

    const res = await fetch(
      `https://${searchRegion}.api.riotgames.com/lol/match/v5/matches/${gameId}?api_key=${API_KEY}`
    );

    if (!res.ok) throw Error("Error fetching game");

    const game = await res.json();

    return new Response(JSON.stringify(game), {
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
