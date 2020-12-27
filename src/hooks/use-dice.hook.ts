import * as React from 'react'
import { Dice } from 'interfaces-and-types/dice-type'

export function useDice(
  relatedAttributeValue: number,
  skillValue: number,
): [Dice, ({ ability, proficiency }: Dice) => void] {
  const [dice, setDice] = React.useState({ ability: 0, proficiency: 0 })

  React.useEffect(() => {
    const ability = Math.abs(skillValue - relatedAttributeValue)
    const proficiency = skillValue <= relatedAttributeValue ? Number(skillValue) : Number(relatedAttributeValue)
    setDice({ ability, proficiency })
  }, [relatedAttributeValue, skillValue])

  return [dice, setDice]
}
