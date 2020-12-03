import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { IResults, IRoll } from 'interfaces-and-types/roll.interface'
import { stringToColor } from 'utils/string-to-color'

import { ResultSummary } from './result-summary.component'
import { ResultDie } from './result-die.component'

type RollProps = {
  roll: IRoll
  characterName: string
  results: IResults
}

const Roll: React.FC<RollProps> = ({ roll, characterName, results }) => {
  // This component's markup is upsidedown because of the parent component column-reverse css declaration
  // That, in turn, is required to correctly display the sorted data returned from Firebase (newest on the
  // bottom, oldest on the top)
  return (
    <>
      <ResultSummary results={results} />
      <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '.5rem' }}>
        {Object.entries(roll).map(die => {
          if (die[0] === 'characterName') return
          return die[1].map((symbols: string[]) => <ResultDie key={uuidv4()} die={die[0]} symbols={symbols} />)
        })}
      </div>
      <div style={{ color: stringToColor(characterName) }}>{characterName} rolled:</div>
    </>
  )
}

export { Roll }
