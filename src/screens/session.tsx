import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useUser, useFirestore, useFirestoreCollectionData } from 'reactfire'
import { User } from 'firebase/app'

import { Button, ButtonGroup, Text } from '@chakra-ui/react'

import { ICharacter } from 'components/character-sheet/character-sheet.interface'

import { CharacterSheet } from 'components/character-sheet/character-sheet.component'
import { CharacterDetails } from 'components/character-sheet/character-details.component'

const Session: React.FC = () => {
  const user: User = useUser()
  const values = useParams()
  console.log(values)
  const [edit, setEdit] = React.useState(false)

  const [character, setCharacter] = React.useState<ICharacter>()

  const userCharactersCollectionQuery = useFirestore()
    .collection('characters')
    .where('characterDetails.playerId', '==', user.uid)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleUpdate(values: any) {
    console.log(values)
  }

  const userCharacters: ICharacter[] = useFirestoreCollectionData(userCharactersCollectionQuery, { idField: 'docId' })
  return (
    <>
      {character ? (
        <>
          <Button onClick={() => setEdit(isEdit => !isEdit)}>Edit Mode</Button>
          <CharacterSheet>
            <CharacterDetails handleUpdate={handleUpdate} isEdit={edit} characterDetails={character.characterDetails} />
          </CharacterSheet>
        </>
      ) : (
        <>
          <Text fontSize="2xl">Select Character</Text>
          <ButtonGroup>
            {userCharacters.map(char => (
              <Button key={char.docId} onClick={() => setCharacter(char)}>
                {char.characterDetails.name}
              </Button>
            ))}
          </ButtonGroup>
        </>
      )}
    </>
  )
}

export { Session }
