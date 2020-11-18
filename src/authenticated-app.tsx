import * as React from 'react'
import { useUser, useFirestore, useFirestoreCollectionData } from 'reactfire'
import { User } from 'firebase/app'

import { Button, ButtonGroup } from '@chakra-ui/react'

import { ICharacter } from 'components/character-sheet/character-sheet.interface'

import { CharacterSheet } from 'components/character-sheet/character-sheet.component'
import { CharacterDetails } from 'components/character-sheet/character-details.component'

const AuthenticatedApp: React.FC = () => {
  const [character, setCharacter] = React.useState<ICharacter>()
  const user: User = useUser()

  const userCharactersCollectionQuery = useFirestore()
    .collection('characters')
    .where('characterDetails.playerId', '==', user.uid)

  const userCharacters: ICharacter[] = useFirestoreCollectionData(userCharactersCollectionQuery, { idField: 'docId' })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return (
    <CharacterSheet>
      {character ? (
        <CharacterDetails docId={character.docId} characterDetails={character.characterDetails} />
      ) : (
        <ButtonGroup>
          {userCharacters.map(char => (
            <Button key={char.docId} onClick={() => setCharacter(char)}>
              {char.characterDetails.name}
            </Button>
          ))}
        </ButtonGroup>
      )}
    </CharacterSheet>
  )
}

export { AuthenticatedApp }
