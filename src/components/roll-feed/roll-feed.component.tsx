import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useFirestoreCollectionData, useFirestore } from 'reactfire'
import styled from '@emotion/styled'

import { DicePanel } from './dice-panel.component'
import { Roll } from './roll.component'
import { IRoll } from 'interfaces-and-types/roll.interface'

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
  const rolls = useFirestoreCollectionData<IRoll>(sessionsRollsRef, { idField: 'docId' })

  return (
    <RollFeedContainer>
      {rolls.map(roll => (
        <Roll key={roll.docId} roll={roll} />
      ))}
      <DicePanel rollsRef={sessionsRollsRef} />
    </RollFeedContainer>
  )
}

export { RollFeed }
