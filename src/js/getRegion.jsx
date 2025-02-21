export const getRegion = (region) => {
  // brazil
  if (region === "br") return "br1";
  // europe nordic and east
  if (region === "eun") return "eun1";
  // europe west
  if (region === "euw") return "euw1";
  // japan
  if (region === "jp") return "jp1";
  // korea
  if (region === "kr") return "kr";
  // latin america north
  if (region === "lan") return "la1";
  // latin america south
  if (region === "las") return "la2";
  // middle east
  if (region === "me") return "me1";
  // north america
  if (region === "na") return "na1";
  // oceania
  if (region === "oc") return "oc1";
  // russia
  if (region === "ru") return "ru";
  // south east asia
  if (region === "sea") return "sg2";
  // turkey
  if (region === "tr") return "tr1";
  // taiwan
  if (region === "tw") return "tw2";
  // vietnam
  if (region === "vn") return "vn2";
};

export const getRegionNuevo = (region) => {
  // brazil
  if (region === "br") return "americas";
  // europe nordic and east
  if (region === "eun") return "europe";
  // europe west
  if (region === "euw") return "europe";
  // japan
  if (region === "jp") return "asia";
  // korea
  if (region === "kr") return "asia";
  // latin america north
  if (region === "lan") return "americas";
  // latin america south
  if (region === "las") return "americas";
  // middle east
  if (region === "me") return "asia";
  // north america
  if (region === "na") return "americas";
  // oceania
  if (region === "oc") return "americas";
  // russia
  if (region === "ru") return "europe";
  // south east asia
  if (region === "sea") return "asia";
  // turkey
  if (region === "tr") return "europe";
  // taiwan
  if (region === "tw") return "asia";
  // vietnam
  if (region === "vn") return "asia";
};

export const getRegionMatches = (region) => {
  // brazil
  if (region === "br") return "americas";
  // europe nordic and east
  if (region === "eun") return "europe";
  // europe west
  if (region === "euw") return "europe";
  // japan
  if (region === "jp") return "asia";
  // korea
  if (region === "kr") return "asia";
  // latin america north
  if (region === "lan") return "americas";
  // latin america south
  if (region === "las") return "americas";
  // middle east
  if (region === "me") return "asia";
  // north america
  if (region === "na") return "americas";
  // oceania
  if (region === "oc") return "americas";
  // russia
  if (region === "ru") return "europe";
  // south east asia
  if (region === "sea") return "sea";
  // turkey
  if (region === "tr") return "europe";
  // taiwan
  if (region === "tw") return "sea";
  // vietnam
  if (region === "vn") return "asia";
};
