interface IRoll {
  ability: string[][]
  boost: string[][]
  challenge: string[][]
  difficulty: string[][]
  proficiency: string[][]
  setback: string[][]
}

interface IFirebaseRoll {
  roll: string
  characterName: string
  createdAt: number
  results: IResults
  docId: string
}

interface IDicePanel {
  ability: number
  boost: number
  challenge: number
  difficulty: number
  proficiency: number
  setback: number
}

interface IDieResultMap {
  [Die.Boost]: {
    [1]: string[]
    [2]: string[]
    [3]: string[]
    [4]: string[]
    [5]: string[]
    [6]: string[]
  }
  [Die.Setback]: {
    [1]: string[]
    [2]: string[]
    [3]: string[]
    [4]: string[]
    [5]: string[]
    [6]: string[]
  }
  [Die.Ability]: {
    [1]: string[]
    [2]: string[]
    [3]: string[]
    [4]: string[]
    [5]: string[]
    [6]: string[]
    [7]: string[]
    [8]: string[]
  }
  [Die.Difficulty]: {
    [1]: string[]
    [2]: string[]
    [3]: string[]
    [4]: string[]
    [5]: string[]
    [6]: string[]
    [7]: string[]
    [8]: string[]
  }
  [Die.Proficiency]: {
    [1]: string[]
    [2]: string[]
    [3]: string[]
    [4]: string[]
    [5]: string[]
    [6]: string[]
    [7]: string[]
    [8]: string[]
    [9]: string[]
    [10]: string[]
    [11]: string[]
    [12]: string[]
  }
  [Die.Challenge]: {
    [1]: string[]
    [2]: string[]
    [3]: string[]
    [4]: string[]
    [5]: string[]
    [6]: string[]
    [7]: string[]
    [8]: string[]
    [9]: string[]
    [10]: string[]
    [11]: string[]
    [12]: string[]
  }
}

interface IResults {
  success: number
  failure: number
  advantage: number
  threat: number
  triumph: number
  despair: number
  blank: number
}

export enum Die {
  Ability = 'ability',
  Boost = 'boost',
  Challenge = 'challenge',
  Difficulty = 'difficulty',
  Proficiency = 'proficiency',
  Setback = 'setback',
}

export enum Result {
  Success = 'success',
  Failure = 'failure',
  Advantage = 'advantage',
  Threat = 'threat',
  Triumph = 'triumph',
  Despair = 'despair',
  Blank = 'blank',
}

export type { IRoll, IDicePanel, IDieResultMap, IResults, IFirebaseRoll }
