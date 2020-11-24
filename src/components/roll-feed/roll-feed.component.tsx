import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useFirestoreCollectionData, useFirestore } from 'reactfire'
import { preProcessFile } from 'typescript'

const RollFeed: React.FC = () => {
  const { sessionId } = useParams<{ sessionId: string }>()

  const sessionsRollsRef = useFirestore().collection('sessions').doc(sessionId).collection('sessions-rolls')
  const rolls = useFirestoreCollectionData(sessionsRollsRef)

  console.log(rolls)

  return (
    <div>
      {rolls.map(roll => (
        <div key={roll.playerName as string}>{JSON.stringify(roll)}</div>
      ))}
    </div>
  )
}

export { RollFeed }
