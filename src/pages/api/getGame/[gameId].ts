import type { APIRoute } from "astro";

const API_KEY = import.meta.env.RIOT_API_KEY;

export const GET: APIRoute = async ({ params }) => {
  try {
    const { gameId } = params;

    if (!gameId) throw Error("Game id missing");

    const res = await fetch(
      `https://americas.api.riotgames.com/lol/match/v5/matches/${gameId}?api_key=${API_KEY}`
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
