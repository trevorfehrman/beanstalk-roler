interface ICharacter {
  docId: string
  attributes: IAttributes
  characterDescription: ICharacterDescription
  characterDetails: ICharacterDetails
  criticalInuries: ICriticalInjury[]
  equipmentLog: IEquipmentLog
  favors: IFavors
  motivations: IMotivations
  notes: string[]
  skills: ISkills
  talentsAndSpecialAbilities: ITalent[]
  weapons: IWeapon[]
  woundStrainAndDefense: IWoundStrainAndDefense
  xp: IXp
}

interface IXp {
  availibleXp: number
  totalXp: number
}

interface IAttributes {
  agility: number
  brawn: number
  cunning: number
  intellect: number
  presence: number
  willpower: number
}

interface ICharacterDescription {
  age: string
  build: string
  eyes: string
  gender: string
  hair: string
  height: string
  notableFeatures: string[]
}

interface ICharacterDetails {
  archetype: string
  career: string
  name: string
  playerId?: string
}

interface ICriticalInjury {
  result: string
  severity: number
}

interface IEquipmentLog {
  money: number
  personalGear: IPersonalGear[]
  weaponsAndArmor: string[]
}

interface IPersonalGear {
  name: string
  notes: string
  quantity: number
}

interface IFavors {
  given: string[]
  owed: string[]
}

interface IMotivations {
  desire: string
  fear: string
  flaw: string
  strength: string
}

interface ISkills {
  combatSkills: ICombatSkills
  generalSkills: IGeneralSkills
  knowledgeSkills: IKnowledgeSkills
  socialSkills: ISocialSkills
  customSkills: ICustomSkill[]
}

interface ICombatSkills {
  brawl: number
  gunnery: number
  melee: number
  rangedHeavy: number
  rangedLight: number
}

interface IGeneralSkills {
  athletics: number
  compHacking: number
  compSysops: number
  cool: number
  coordination: number
  discipline: number
  driving: number
  mechanics: number
  medicine: number
  operating: number
  perception: number
  piloting: number
  resilience: number
  skullduggery: number
  stealth: number
  streetwise: number
  survival: number
  vigilance: number
}

interface IKnowledgeSkills {
  science: number
  society: number
  theNet: number
}

interface ISocialSkills {
  charm: number
  coercion: number
  deception: number
  leadership: number
  negotiation: number
}

interface ICustomSkill {
  name: string
  value: number
  associatedAttribute: Attributes
}

interface ITalent {
  abilitySummary: string
  active: boolean
  name: string
  page: string
  tier: number
}

interface IWeapon {
  crit: number
  damage: number
  range: string
  skill: string
  special: string
  weaponName: string
}

interface IWoundStrainAndDefense {
  defense: {
    melee: number
    ranged: number
  }
  soak: number
  strainThreshold: {
    current: number
    total: number
  }
  woundThreshold: {
    current: number
    total: number
  }
}

export enum CharLeaf {
  Archetype = 'characterDetails.archetype',
  Career = 'characterDetails.career',
  Name = 'characterDetails.name',
  PlayerId = 'characterDetails.playerId',
  DefenseMelee = 'woundStrainAndDefense.defense.melee',
  DefenseRanged = 'woundStrainAndDefense.defense.ranged',
  Soak = 'woundStrainAndDefense.soak',
  StrainCurrent = 'woundStrainAndDefense.strainThreshold.current',
  StrainTotal = 'woundStrainAndDefense.strainThreshold.total',
  WoundCurrent = 'woundStrainAndDefense.woundThreshold.current',
  WoundTotal = 'woundStrainAndDefense.woundThreshold.total',
  XpAvailible = 'xp.availibleXp',
  XpTotal = 'xp.totalXp',
  Brawn = 'attributes.brawn',
  Agility = 'attributes.agility',
  Intellect = 'attributes.intellect',
  Cunning = 'attributes.cunning',
  Willpower = 'attributes.willpower',
  Presence = 'attributes.presence',
  Gender = 'characterDescription.gender',
  Age = 'characterDescription.age',
  Height = 'characterDescription.height',
  Biuld = 'characterDescription.build',
  Hair = 'characterDescription.hair',
  Eyes = 'characterDescription.eyes',
}

export enum Attributes {
  Brawn = 'Brawn',
  Agility = 'Agility',
  Intellect = 'Intellect',
  Cunning = 'Cunning',
  Willpower = 'Willpower',
  Presence = 'Presence',
}

export type {
  ICharacter,
  ICharacterDetails,
  IAttributes,
  IWoundStrainAndDefense,
  IXp,
  ICharacterDescription,
  ISkills,
  IKnowledgeSkills,
  ISocialSkills,
  IGeneralSkills,
  ICombatSkills,
}
