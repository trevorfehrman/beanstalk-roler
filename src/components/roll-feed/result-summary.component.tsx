import { IResults, Result } from 'interfaces-and-types/roll.interface'
import * as React from 'react'

const ResultSummary: React.FC<{ results: IResults }> = ({ results }) => {
  return (
    <div>
      {Object.entries(results).map(([resultKey, result]: [string, number]) => {
        if (resultKey === Result.Blank) return
        if (result)
          return (
            <span style={{ marginRight: '.5rem' }}>
              <span>{resultKey.charAt(0).toUpperCase() + resultKey.slice(1)}: </span>
              <span>{result}</span>
            </span>
          )
      })}
    </div>
  )
}

export { ResultSummary }
