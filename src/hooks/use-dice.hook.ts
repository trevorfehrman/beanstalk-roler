import * as React from 'react'
import { Dice } from 'interfaces-and-types/dice-type'

export function useDice(
  relatedAttributeValue: number,
  skillValue: number,
): [Dice, ({ greenDice, yellowDice }: Dice) => void] {
  const [dice, setDice] = React.useState({ greenDice: 0, yellowDice: 0 })

  React.useEffect(() => {
    const greenDice = Math.abs(skillValue - relatedAttributeValue)
    const yellowDice = skillValue <= relatedAttributeValue ? Number(skillValue) : Number(relatedAttributeValue)
    setDice({ greenDice, yellowDice })
  }, [relatedAttributeValue, skillValue])

  return [dice, setDice]
}
