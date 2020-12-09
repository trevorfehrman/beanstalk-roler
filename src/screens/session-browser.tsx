import * as React from 'react'
import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire'
import { User } from 'firebase/app'
import { Link } from 'react-router-dom'

import { Formik, useFormik } from 'formik'

import {
  ButtonGroup,
  Button,
  Input,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

import { ISession } from 'interfaces-and-types/session.interface'

const SessionBrowser: React.FC = () => {
  const [uids, setUids] = React.useState<string[]>([])

  const { isOpen, onOpen, onClose } = useDisclosure()
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: values => addSession(values.name),
  })

  const user: User = useUser()
  const userSessionsRef = useFirestore().collection('sessions')
  const usersRef = useFirestore().collection('users')
  const users: User[] = useFirestoreCollectionData(usersRef)
  const userSessionsQuery = userSessionsRef.where('userIds', 'array-contains', user.uid)
  const userSessions: ISession[] = useFirestoreCollectionData(userSessionsQuery, { idField: 'docId' })

  function handleAddToSession(uid: string) {
    uids.includes(uid) ? setUids(uids.filter(uid => !uid)) : setUids([...uids, uid])
  }

  function addSession(name: string) {
    userSessionsRef.add({ name, userIds: [...uids, user.uid] })
  }

  return (
    <div>
      <Text fontSize="2xl">Sessions</Text>
      <ButtonGroup>
        {userSessions.map(session => (
          <Link key={session.docId} to={`/session/${session.docId}`}>
            <Button>{session.name}</Button>
          </Link>
        ))}
        <Button onClick={onOpen}>Create New Session +</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create New Session</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={formik.handleSubmit}>
              <ModalBody>
                <Input id="name" type="text" {...formik.getFieldProps('name')} />
                <ButtonGroup>
                  {users.map(otherUser => {
                    if (otherUser.uid !== user.uid) {
                      return (
                        <Button
                          variant={uids.includes(otherUser.uid) ? 'solid' : 'outline'}
                          onClick={() => handleAddToSession(otherUser.uid)}
                          key={user.uid}
                          colorScheme="teal"
                        >
                          {user.displayName}
                        </Button>
                      )
                    }
                  })}
                </ButtonGroup>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost" type="submit">
                  Create Session +
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </ButtonGroup>
    </div>
  )
}

export { SessionBrowser }
