import * as React from 'react'

import { Result } from 'interfaces-and-types/roll.interface'

import { Advantage } from 'assets/advantage'
import { Despair } from 'assets/despair'
import { Failure } from 'assets/failure'
import { Success } from 'assets/success'
import { Threat } from 'assets/threat'
import { Triumph } from 'assets/triumph'

const Icon: React.FC<{ icon: string; color: string; size: string }> = ({ icon, color, size }) => {
  return (
    <>
      {(() => {
        switch (icon) {
          case Result.Advantage:
            return <Advantage size={size} color={color} />
          case Result.Blank:
            return
          case Result.Despair:
            return <Despair size={size} color={color} />
          case Result.Failure:
            return <Failure size={size} color={color} />
          case Result.Success:
            return <Success size={size} color={color} />
          case Result.Threat:
            return <Threat size={size} color={color} />
          case Result.Triumph:
            return <Triumph size={size} color={color} />
          default:
            return
        }
      })()}
    </>
  )
}

export { Icon }
