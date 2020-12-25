import * as React from 'react'

import { IResults, Result } from 'interfaces-and-types/roll.interface'

import { ResultSummaryTag } from 'styled-components/result-summary-tag'

const ResultSummary: React.FC<{ results: IResults }> = ({ results }) => {
  return (
    <div style={{ border: '1px solid lightgray', borderRadius: '.375rem' }}>
      {results.failure > 0 && (
        <ResultSummaryTag as="span" background="#F44336">
          FAIL
        </ResultSummaryTag>
      )}
      {results.success > 0 && (
        <ResultSummaryTag as="span" background="#4caf50">
          SUCCESS
        </ResultSummaryTag>
      )}
      {results.success === 0 && results.failure === 0 && (
        <ResultSummaryTag color="black" as="span" background="transparent">
          WASH
        </ResultSummaryTag>
      )}
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
