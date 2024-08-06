import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const puuid = url.searchParams.get("puuid");
    const count = url.searchParams.get("count");
    const startTime = url.searchParams.get("startTime");
    const queue = url.searchParams.get("queue");
    const type = url.searchParams.get("type");

    if (!puuid) throw Error("Puuid missing");
    if (!count) throw Error("Games to fetch not specified");

    const apiUrl = new URL(
      `/api/getGameIds?puuid=${puuid}&count=${count}` +
        (startTime ? `&startTime=${startTime}` : "") +
        (queue ? `&queue=${queue}` : "") +
        (type ? `&type=${type}` : ""),
      request.url
    );

    const res = await fetch(apiUrl.href);

    if (!res.ok) throw Error("Error fetching game ids");

    const gameIds = await res.json();

    const games = await Promise.all(
      gameIds.map(async (gameId) => {
        const gameUrl = new URL(`/api/getGame/${gameId}`, request.url);
        const res = await fetch(gameUrl.href);
        if (!res.ok) throw new Error("Error fetching game");
        const data = await res.json();
        return data;
      })
    );

    return new Response(JSON.stringify(games), {
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
