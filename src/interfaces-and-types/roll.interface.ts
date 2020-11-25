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

export type { IRoll, IDicePanel }
