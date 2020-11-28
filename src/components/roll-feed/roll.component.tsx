import * as React from 'react'

import { IRoll } from 'interfaces-and-types/roll.interface'

type RollProps = {
  roll: IRoll
}

const Roll: React.FC<RollProps> = ({ roll }) => {
  return (
    <div>
      {Object.entries(roll).map(([die, results]) => {
        if (die === 'docId' || die === 'characterName') return
        return (
          <>
            {results.length ? <span key={die}>{die.toUpperCase()}</span> : null}
            {results.map((result: number, i: number) => (
              <span key={i}>{result}</span>
            ))}
          </>
        )
      })}
    </div>
  )
}

export { Roll }
