import type { APIRoute } from "astro";

export const GET: APIRoute = async ({}) => {
  try {
    let res;

    res = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");

    const ddragonVersions = await res.json();
    const ddragonVersion = ddragonVersions[0];

    if (!res.ok) throw Error("Error fetching ddragon version");

    res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/data/en_US/champion.json`
    );

    const championsJson = await res.json();

    if (!res.ok) throw Error("Error fetching champions json");

    res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/data/en_US/summoner.json`
    );

    const spellsJson = await res.json();

    if (!res.ok) throw Error("Error fetching spells json");

    res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/data/en_US/runesReforged.json`
    );

    const runesJson = await res.json();

    if (!res.ok) throw Error("Error fetching items json");

    res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/data/en_US/item.json`
    );

    const itemsJson = await res.json();

    if (!res.ok) throw Error("Error fetching runes json");

    return new Response(
      JSON.stringify({ ddragonVersion, championsJson, spellsJson, runesJson, itemsJson }),
      {
        status: 200,
        statusText: "Ok",
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(error, {
      status: 400,
      statusText: error,
    });
  }
};
