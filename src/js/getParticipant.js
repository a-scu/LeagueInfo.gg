const getParticipant = async (
  team,
  participant,
  gameDuration,
  summonerPuuid,
  summonerRanked,
  jsons
) => {
  let {
    win,
    puuid,
    perks,
    item0,
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    kills,
    teamId,
    deaths,
    assists,
    summonerId,
    championId,
    champLevel,
    goldEarned,
    summoner1Id,
    summoner2Id,
    visionScore,
    wardsPlaced,
    wardsKilled,
    summonerName,
    championName,
    teamPosition,
    riotIdTagline,
    riotIdGameName,
    largestMultiKill,
    totalDamageTaken,
    totalMinionsKilled,
    detectorWardsPlaced,
    neutralMinionsKilled,
    totalDamageDealtToChampions,
  } = participant;

  const { ddragonVersion, championsJson, spellsJson, runesJson, itemsJson } = jsons;

  const champIcon = getChampIcon(championId, championsJson, ddragonVersion);
  const spells = getSpells([summoner1Id, summoner2Id], spellsJson, ddragonVersion);
  const runes = getRunes(perks, runesJson);
  const itemsArray = [item0, item1, item2, item3, item4, item5, item6];
  const items = getItems(itemsArray, itemsJson, ddragonVersion);
  const [cs, csPerMinute] = getCS(totalMinionsKilled, neutralMinionsKilled, gameDuration);

  const isCurrentSummoner = puuid === summonerPuuid;

  let ranked;
  if (isCurrentSummoner) {
    ranked = summonerRanked;
  } else {
    const res = await fetch(`/api/getRankedData/${summonerId}`);
    if (res.ok) {
      const rankedData = await res.json();
      ranked = rankedData;
    }
  }

  const visionScorePerMinute = (visionScore / (gameDuration / 60)).toFixed(1);
  const goldPerMinute = (goldEarned / (gameDuration / 60)).toFixed(0);

  const name = riotIdGameName || summonerName;
  const linkToProfile = `${riotIdGameName || summonerName}-${riotIdTagline}`
    .replace(/\s/g, "")
    .toLowerCase();

  participant = {
    cs,
    win,
    name,
    puuid,
    runes,
    items,
    kills,
    teamId,
    spells,
    deaths,
    ranked,
    assists,
    champIcon,
    summonerId,
    champLevel,
    csPerMinute,
    visionScore,
    wardsKilled,
    linkToProfile,
    goldPerMinute,
    team: team.team,
    largestMultiKill,
    gold: goldEarned,
    tag: riotIdTagline,
    wards: wardsPlaced,
    visionScorePerMinute,
    position: teamPosition,
    champName: championName,
    damageTaken: totalDamageTaken,
    controlWards: detectorWardsPlaced,
    damageToChampions: totalDamageDealtToChampions,
  };

  return participant;
};

const getChampIcon = (champId, championsJson, ddragonVersion) => {
  const { image } = Object.values(championsJson.data).find(({ key }) => key === champId.toString());
  return `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/img/champion/${image.full}`;
};

const getSpells = (spells, SPELLS, ddragonVersion) => {
  spells = spells.map((spell) => {
    spell = Object.values(SPELLS.data).find(({ key }) => key === spell.toString());

    return {
      name: spell?.name,
      icon: `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/img/spell/${spell?.image.full}`,
    };
  });

  return spells;
};

const getRunes = (perks, runesJson) => {
  const runes = perks.styles.map((perk) => {
    const runeStyle = Object.values(runesJson).find(({ id }) => id === perk.style);

    const runes = [];

    perk.selections.forEach((selection) => {
      const rune = runeStyle?.slots.forEach((slot) => {
        slot.runes.forEach(({ id, name, icon }) => {
          if (id === selection.perk) {
            runes.push({
              name,
              icon: `https://ddragon.leagueoflegends.com/cdn/img/${icon}`,
            });
          }
        });
      });

      return rune;
    });

    return {
      style: {
        name: runeStyle?.name,
        icon: `https://ddragon.leagueoflegends.com/cdn/img/${runeStyle?.icon}`,
      },
      runes,
    };
  });

  return runes;
};

const getItems = (items, itemsJson, ddragonVersion) => {
  items = items.map((item) => {
    if (item) {
      const { name, image } = itemsJson.data[item.toString()] || {};

      return {
        name,
        image: `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/img/item/${image?.full}`,
      };
    }
  });

  return items;
};

const getCS = (totalMinionsKilled, neutralMinionsKilled, gameDuration) => {
  const cs = totalMinionsKilled + neutralMinionsKilled;
  const csPerMinute = (cs / (gameDuration / 60)).toFixed(1);
  return [cs, csPerMinute];
};

export default getParticipant;
