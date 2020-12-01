import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Die } from 'interfaces-and-types/roll.interface'
import { Ability } from 'assets/ability'
import { Boost } from 'assets/boost'
import { Challenge } from 'assets/challenge'
import { Difficulty } from 'assets/difficulty'
import { Proficiency } from 'assets/proficiency'
import { Setback } from 'assets/setback'

type ResultDieProps = {
  die: [string, string[][]]
}

const ResultDie: React.FC<ResultDieProps> = ({ die }) => {
  return (
    <div>
      {die[1].length ? (
        <>
          <strong>{die[1].length ? die[0] : null}</strong>
          {(() => {
            switch (die[0]) {
              case Die.Ability:
                return <Ability size="4rem" />
              case Die.Boost:
                return (
                  <Boost size="4rem">
                    {die[1].map(icon => (
                      <span key={uuidv4()}>{icon}</span>
                    ))}
                  </Boost>
                )
              case Die.Challenge:
                return <Challenge size="4rem" />
              case Die.Difficulty:
                return <Difficulty size="4rem" />
              case Die.Proficiency:
                return <Proficiency size="4rem" />
              case Die.Setback:
                return <Setback size="4rem" />
              default:
                return
            }
          })()}
        </>
      ) : null}
      {/* {die[1].map(result => (
        <div key={uuidv4()}>
          {result.map(icon => (
            <span key={uuidv4()}>{icon}</span>
          ))}
        </div>
      ))} */}
    </div>
  )
}

export { ResultDie }
