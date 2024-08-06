import { atom } from "nanostores";

// #region THEME

export const $theme = atom("dark");

export const setTheme = (value) => {
  $theme.set(value);
};

// #region SUMMONER

export const $fetchingSummoner = atom(true);
export const $summoner = atom(null);

export const setFetchingSummoner = (value) => {
  $fetchingSummoner.set(value);
};

export const setSummoner = (value) => {
  $summoner.set(value);
};

// #region JSONS

export const $fetchingJsons = atom(true);
export const $ddragonVersion = atom(null);
export const $champions = atom(null);
export const $spells = atom(null);
export const $runes = atom(null);
export const $items = atom(null);

export const setFetchingJsons = (value) => {
  $fetchingJsons.set(value);
};

export const setJsons = (jsons) => {
  const { ddragonVersion, champions, spells, runes, items } = jsons;

  $ddragonVersion.set(ddragonVersion);
  $champions.set(champions);
  $spells.set(spells);
  $runes.set(runes);
  $items.set(items);
};

// #region RANKED DATA

export const $fetchingRankedData = atom(true);
export const $rankedData = atom(null);

export const setFetchingRankedData = (value) => {
  $fetchingRankedData.set(value);
};

export const setRankedData = (value) => {
  $rankedData.set(value);
};

// #region RECENT GAMES

export const $fetchingRecentGames = atom(true);
export const $recentGames = atom(null);
export const $fetchingGamesStats = atom(true);
export const $gamesStats = atom(null);

export const setFetchingRecentGames = (value) => {
  $fetchingRecentGames.set(value);
};

export const setRecentGames = (value) => {
  $recentGames.set(value);
};

export const setFetchingGamesStats = (value) => {
  $fetchingGamesStats.set(value);
};

export const setGamesStats = (value) => {
  $gamesStats.set(value);
};
