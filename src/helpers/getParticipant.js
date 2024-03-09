import getRanked from "./getRanked";

const DDRAGON_API_VERSION = process.env.DDRAGON_API_VERSION;

const getParticipant = async (
  team,
  participant,
  gameDuration,
  CHAMPIONS,
  SPELLS,
  RUNES,
  ITEMS,
  summonerPuuid,
  summonerRanked
) => {
  let {
    puuid,
    summonerId,
    riotIdGameName,
    summonerName,
    riotIdTagline,
    teamId,
    win,
    championId,
    championName,
    champLevel,
    summoner1Id,
    summoner2Id,
    perks,
    item0,
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    kills,
    deaths,
    assists,
    largestMultiKill,
    totalMinionsKilled,
    neutralMinionsKilled,
    visionScore,
    wardsPlaced,
    detectorWardsPlaced,
    wardsKilled,
    totalDamageDealtToChampions,
    totalDamageTaken,
    goldEarned,
    teamPosition,
  } = participant;

  // console.log(participant);/

  let champIcon = getChampIcon(championId, CHAMPIONS);
  let spells = getSpells([summoner1Id, summoner2Id], SPELLS);
  let runes = getRunes(perks, RUNES);
  let items = getItems(
    [item0, item1, item2, item3, item4, item5, item6],
    ITEMS
  );
  let [cs, csPerMinute] = getCS(
    totalMinionsKilled,
    neutralMinionsKilled,
    gameDuration
  );

  let ranked;

  if (puuid === summonerPuuid) {
    ranked = summonerRanked;
  } else {
    ranked = await getRanked(summonerId);
  }

  let visionScorePerMinute = (visionScore / (gameDuration / 60)).toFixed(1);
  let goldPerMinute = (goldEarned / (gameDuration / 60)).toFixed(0);

  participant = {
    puuid,
    summonerId,
    name: riotIdGameName || summonerName,
    tag: riotIdTagline,
    linkToProfile: `/${riotIdGameName || summonerName}-${riotIdTagline}`
      .replace(/\s/g, "")
      .toLowerCase(),
    teamId,
    team: team.team,
    win,
    champName: championName,
    champLevel,
    champIcon,
    spells,
    runes,
    items,
    kills,
    deaths,
    assists,
    largestMultiKill,
    cs,
    csPerMinute,
    visionScore,
    visionScorePerMinute,
    wards: wardsPlaced,
    controlWards: detectorWardsPlaced,
    wardsKilled,
    damageToChampions: totalDamageDealtToChampions,
    damageTaken: totalDamageTaken,
    gold: goldEarned,
    goldPerMinute,
    ranked,
    position: teamPosition,
  };

  return participant;
};

const getChampIcon = (champId, CHAMPIONS) => {
  const { image } = Object.values(CHAMPIONS.data).find(
    ({ key }) => key === champId.toString()
  );
  return `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_API_VERSION}/img/champion/${image.full}`;
};

const getSpells = (spells, SPELLS) => {
  spells = spells.map((spell) => {
    spell = Object.values(SPELLS.data).find(
      ({ key }) => key === spell.toString()
    );

    return {
      name: spell?.name,
      icon: `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_API_VERSION}/img/spell/${spell?.image.full}`,
    };
  });

  return spells;
};

const getRunes = (perks, RUNES) => {
  const runes = perks.styles.map((perk) => {
    const runeStyle = Object.values(RUNES).find(({ id }) => id === perk.style);

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

const getItems = (items, ITEMS) => {
  items = items.map((item) => {
    if (item) {
      const { name, image } = ITEMS.data[item.toString()];

      return {
        name,
        image: `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_API_VERSION}/img/item/${image.full}`,
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
