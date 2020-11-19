import * as React from 'react'
import { useUser, useFirestore, useFirestoreCollectionData } from 'reactfire'
import { User } from 'firebase/app'

import { Button, ButtonGroup, Text } from '@chakra-ui/react'

import { ICharacter } from 'components/character-sheet/character-sheet.interface'

import { CharacterSheetContainer } from 'components/character-sheet/character-sheet-container.component'

const Session: React.FC = () => {
  const [character, setCharacter] = React.useState<ICharacter>()
  const user: User = useUser()

  const userCharactersCollectionQuery = useFirestore()
    .collection('characters')
    .where('characterDetails.playerId', '==', user.uid)

  const userCharacters: ICharacter[] = useFirestoreCollectionData(userCharactersCollectionQuery, { idField: 'docId' })
  console.log(userCharacters)

  return (
    <>
      {character ? (
        <>
          <CharacterSheetContainer character={character} />
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
