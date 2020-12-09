import * as React from 'react'
import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire'
import { User } from 'firebase/app'
import { Link } from 'react-router-dom'

import { useFormik } from 'formik'

import {
  ButtonGroup,
  Button,
  Center,
  Input,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
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

  function handleAddToSession(otherUid: string) {
    uids.includes(otherUid) ? setUids(uids.filter(uid => uid !== otherUid)) : setUids([...uids, otherUid])
  }

  function addSession(name: string) {
    userSessionsRef.add({ name, userIds: [...uids, user.uid] })
  }

  return (
    <Center height="100vh">
      <Stack>
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
                  <Input
                    marginBottom="1rem"
                    placeholder="Session name..."
                    id="name"
                    type="text"
                    {...formik.getFieldProps('name')}
                  />
                  <ButtonGroup>
                    <Stack spacing="3">
                      {users.map(otherUser => {
                        if (otherUser.uid !== user.uid) {
                          return (
                            <Button
                              variant={uids.includes(otherUser.uid) ? 'solid' : 'outline'}
                              onClick={() => handleAddToSession(otherUser.uid)}
                              key={otherUser.uid}
                              colorScheme="teal"
                            >
                              {otherUser.displayName}
                            </Button>
                          )
                        }
                      })}
                    </Stack>
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
      </Stack>
    </Center>
  )
}

export { SessionBrowser }
