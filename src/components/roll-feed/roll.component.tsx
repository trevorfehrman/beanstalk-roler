/** @jsxRuntime classic */
/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/react'
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
  return (
    <div css={{ borderTop: '1px solid lightgray', marginTop: '1.5rem', paddingTop: '.5rem' }}>
      <div css={{ color: stringToColor(characterName), marginBottom: '.5rem' }}>{characterName} rolled:</div>
      <div css={{ display: 'flex', flexWrap: 'wrap', marginBottom: '.5rem' }}>
        {Object.entries(roll).map(die => {
          if (die[0] === 'characterName') return
          return die[1].map((symbols: string[]) => <ResultDie key={uuidv4()} die={die[0]} symbols={symbols} />)
        })}
      </div>
      <ResultSummary results={results} />
    </div>
  )
}

export { Roll }
