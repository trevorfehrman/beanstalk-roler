import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Die } from 'interfaces-and-types/roll.interface'

import { Icon } from './icon.component'

import { Ability } from 'assets/ability'
import { Boost } from 'assets/boost'
import { Challenge } from 'assets/challenge'
import { Difficulty } from 'assets/difficulty'
import { Proficiency } from 'assets/proficiency'
import { Setback } from 'assets/setback'

type ResultDieProps = {
  die: string
  symbols: string[]
}

const ResultDie: React.FC<ResultDieProps> = ({ die, symbols }) => {
  return (
    <div>
      {symbols.length ? (
        <>
          {(() => {
            switch (die) {
              case Die.Ability:
                return (
                  <Ability size="4rem">
                    {symbols.map(icon => (
                      <Icon key={uuidv4()} icon={icon} color="#ececec" size={symbols.length > 1 ? '1rem' : '1.6rem'} />
                    ))}
                  </Ability>
                )
              case Die.Boost:
                return (
                  <Boost size="4rem">
                    {symbols.map(icon => (
                      <Icon key={uuidv4()} icon={icon} color="#111" size={symbols.length > 1 ? '1.3rem' : '2rem'} />
                    ))}
                  </Boost>
                )
              case Die.Challenge:
                return (
                  <Challenge size="4rem">
                    {symbols.map(icon => (
                      <Icon key={uuidv4()} icon={icon} color="#ececec" size={symbols.length > 1 ? '1rem' : '1.8rem'} />
                    ))}
                  </Challenge>
                )
              case Die.Difficulty:
                return (
                  <Difficulty size="4rem">
                    {symbols.map(icon => (
                      <Icon key={uuidv4()} icon={icon} color="#ececec" size={symbols.length > 1 ? '1rem' : '1.6rem'} />
                    ))}
                  </Difficulty>
                )
              case Die.Proficiency:
                return (
                  <Proficiency size="4rem">
                    {symbols.map(icon => (
                      <Icon key={uuidv4()} icon={icon} color="#111" size={symbols.length > 1 ? '1rem' : '1.6rem'} />
                    ))}
                  </Proficiency>
                )
              case Die.Setback:
                return (
                  <Setback size="4rem">
                    {symbols.map(icon => (
                      <Icon key={uuidv4()} icon={icon} color="#ececec" size={symbols.length > 1 ? '1rem' : '2rem'} />
                    ))}
                  </Setback>
                )
              default:
                return
            }
          })()}
        </>
      ) : null}
    </div>
  )
}

export { ResultDie }
