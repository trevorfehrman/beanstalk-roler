interface ICharacter {
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
  woundStraingAndDefense: IWoundStrainAndDefense
  xp: {
    availibleXp: number
    totalXp: number
  }
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
  playerId: string
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
  operation: number
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

enum Attributes {
  Agility = 'AGILITY',
  Brawn = 'BRAWN',
  Cunning = 'CUNNING',
  Intellect = 'INTELLECT',
  Presence = 'PRESENCE',
  Willpower = 'WILLPOWER',
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

export type { ICharacter }
