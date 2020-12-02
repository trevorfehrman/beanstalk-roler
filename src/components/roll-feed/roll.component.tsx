import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { IRoll } from 'interfaces-and-types/roll.interface'
import { ResultDie } from './result-die.component'

type RollProps = {
  roll: IRoll
}

const Roll: React.FC<RollProps> = ({ roll }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.entries(roll).map(die => {
        // TODO Add Character Name Back
        if (die[0] === 'characterName') return
        return die[1].map((results: string[]) => <ResultDie key={uuidv4()} die={die[0]} results={results} />)
      })}
    </div>
  )
}

export { Roll }
