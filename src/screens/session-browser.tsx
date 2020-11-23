import * as React from 'react'
import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire'
import { User } from 'firebase/app'
import { Link } from 'react-router-dom'

import { ButtonGroup, Button, Text } from '@chakra-ui/react'

import { ISession } from 'interfaces-and-types/session.interface'

const SessionBrowser: React.FC = () => {
  const user: User = useUser()
  const userSessionsQuery = useFirestore().collection('sessions').where('userIds', 'array-contains', user.uid)
  const userSessions: ISession[] = useFirestoreCollectionData(userSessionsQuery, { idField: 'docId' })

  return (
    <div>
      <Text fontSize="2xl">Sessions</Text>
      <ButtonGroup>
        {userSessions.map(session => (
          <Link key={session.docId} to={`/session/${session.docId}`}>
            <Button>{session.name}</Button>
          </Link>
        ))}
      </ButtonGroup>
    </div>
  )
}

export { SessionBrowser }
