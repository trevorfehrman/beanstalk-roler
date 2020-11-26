import { IRoll, Die, IDicePanel } from 'interfaces-and-types/roll.interface'

const dieMap = {
  [Die.Ability]: 8,
  [Die.Boost]: 6,
  [Die.Challenge]: 12,
  [Die.Difficulty]: 8,
  [Die.Proficiency]: 12,
  [Die.Setback]: 6,
}

export function rollDice(dicePanelInput: IDicePanel): IRoll {
  const userRoll: IRoll = Object.entries(dicePanelInput).reduce(
    (acc: IRoll, [die, amount]: [string, number]) => {
      for (let i = 0; i < amount; i++) {
        acc[die as keyof IRoll].push(rollDie(die as Die))
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
  console.log(userRoll)
  return userRoll
}

function rollDie(die: Die): number {
  return Math.ceil(Math.random() * dieMap[die])
}
