interface IRoll {
  ability: number[]
  boost: number[]
  challenge: number[]
  difficulty: number[]
  proficiency: number[]
  setback: number[]
}

interface IDicePanel {
  ability: number
  boost: number
  challenge: number
  difficulty: number
  proficiency: number
  setback: number
}

export enum Die {
  Ability = 'ability',
  Boost = 'boost',
  Challenge = 'challenge',
  Difficulty = 'difficulty',
  Proficiency = 'proficiency',
  Setback = 'setback',
}

export type { IRoll, IDicePanel }
