import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useFirestoreCollectionData, useFirestore } from 'reactfire'
import styled from '@emotion/styled'

import { DicePanel } from './dice-panel.component'

const RollFeedContainer = styled.div({
  height: '100vh',
  position: 'fixed',
  right: 0,
  width: '33%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '0 2rem 2rem 0',
})

const RollFeed: React.FC = () => {
  const { sessionId } = useParams<{ sessionId: string }>()

  const sessionsRollsRef = useFirestore().collection('sessions').doc(sessionId).collection('sessions-rolls')
  const rolls = useFirestoreCollectionData(sessionsRollsRef)

  return (
    <RollFeedContainer>
      {rolls.map((roll, i) => (
        <div key={i}>{JSON.stringify(roll)}</div>
      ))}
      <DicePanel />
    </RollFeedContainer>
  )
}

export { RollFeed }
