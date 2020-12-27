/** @jsxRuntime classic */
/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { v4 as uuidv4 } from 'uuid'

import { IResults, IRoll } from 'interfaces-and-types/roll.interface'
import { stringToColor } from 'utils/string-to-color'

import { ResultSummary } from './result-summary.component'
import { ResultDie } from './result-die.component'

const RollContainer = styled('div')(props => ({
  borderTop: '1px solid lightgray',
  margin: '2.5rem 1rem .5rem .5rem',
  padding: '1rem',
  border: `2px solid ${props.color}`,
  borderRadius: '.375rem',
}))

type RollProps = {
  roll: IRoll
  characterName: string
  results: IResults
  skillName: string
}

const Roll: React.FC<RollProps> = ({ roll, characterName, results, skillName }) => {
  return (
    <RollContainer color={stringToColor(characterName)}>
      <div css={{ color: stringToColor(characterName), marginBottom: '.5rem', fontWeight: 'bold' }}>
        {characterName} rolled a {skillName} check:
      </div>
      <div css={{ display: 'flex', flexWrap: 'wrap', marginBottom: '.5rem' }}>
        {Object.entries(roll).map(die => {
          if (die[0] === 'characterName') return
          return die[1].map((symbols: string[]) => <ResultDie key={uuidv4()} die={die[0]} symbols={symbols} />)
        })}
      </div>
      <ResultSummary results={results} />
    </RollContainer>
  )
}

export { Roll }
