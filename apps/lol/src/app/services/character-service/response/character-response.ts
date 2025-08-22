export interface CharacterDetails {
  id: string;
  key: string;
  name: string;
  title: string;
  image: CharacterImage;
  skins: Skin[];
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  tags: string[];
  partype: string;
  info: CharacterInfo;
  stats: CharacterStats;
  spells: Spell[];
  passive: Passive;
  recommended: any[];
}

export interface CharacterImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Skin {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}

export interface CharacterInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

export interface CharacterStats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}

export interface Spell {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: LevelTip;
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: any;
  effect: (number[] | null)[];
  effectBurn: (string | null)[];
  vars: any[];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: CharacterImage;
  resource: string;
}

export interface LevelTip {
  label: string[];
  effect: string[];
}

export interface Passive {
  name: string;
  description: string;
  image: CharacterImage;
}
