import { IRoll, Die, IDicePanel, IDieResultMap, IResults } from 'interfaces-and-types/roll.interface'
import { dieResultMap } from 'constants/die-result.constant'

const dieMap = {
  [Die.Ability]: 8,
  [Die.Boost]: 6,
  [Die.Challenge]: 12,
  [Die.Difficulty]: 8,
  [Die.Proficiency]: 12,
  [Die.Setback]: 6,
}

export function rollDice(dicePanelInput: IDicePanel): [IRoll, IResults] {
  const userRoll: IRoll = Object.entries(dicePanelInput).reduce(
    (acc: IRoll, [die, amount]: [string, number]) => {
      for (let i = 0; i < amount; i++) {
        // TODO: Fix this nonsense.  Optional docId causes it.
        acc[die as 'ability' | 'boost' | 'challenge' | 'difficulty' | 'proficiency' | 'setback'].push(
          rollDie(die as Die),
        )
        // acc[die as 'ability' | 'boost' | 'challenge' | 'difficulty' | 'proficiency' | 'setback'] = [
        //   ...acc[die as 'ability' | 'boost' | 'challenge' | 'difficulty' | 'proficiency' | 'setback'],
        //   ...rollDie(die as Die),
        // ]
      }
      return { ...acc }
    },
    {
      ability: [],
      boost: [],
      challenge: [],
      difficulty: [],
      proficiency: [],
      setback: [],
    },
  )
  const results = Object.entries(userRoll)
  console.log(results, userRoll, 'hiiiiiiii')
  const flatResults: IResults = Object.values(userRoll)
    .flat(2)
    .reduce(
      (acc: IResults, result: 'success' | 'failure' | 'advantage' | 'threat' | 'triumph' | 'despair' | 'blank') => {
        return { ...acc, [result]: acc[result] + 1 }
      },
      {
        success: 0,
        failure: 0,
        advantage: 0,
        threat: 0,
        triumph: 0,
        despair: 0,
        blank: 0,
      },
    )

  const successDifference: number =
    flatResults.success + flatResults.triumph - flatResults.failure - flatResults.despair
  const advantageDifference: number = flatResults.advantage - flatResults.threat

  if (successDifference > 0) {
    flatResults.success = successDifference
    flatResults.failure = 0
  } else if (successDifference === 0) {
    flatResults.success = 0
    flatResults.failure = 0
  } else if (successDifference < 0) {
    flatResults.success = 0
    flatResults.failure = Math.abs(successDifference)
  }

  if (advantageDifference > 0) {
    flatResults.advantage = advantageDifference
    flatResults.threat = 0
  } else if (advantageDifference === 0) {
    flatResults.advantage = 0
    flatResults.threat = 0
  } else if (advantageDifference < 0) {
    flatResults.advantage = 0
    flatResults.threat = Math.abs(advantageDifference)
  }

  return [userRoll, flatResults]
}

function rollDie(die: Die): string[] {
  return dieResultMap[die][String(Math.ceil(Math.random() * dieMap[die])) as '1' | '2' | '3' | '4' | '5' | '6']
}
