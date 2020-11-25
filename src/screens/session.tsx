import * as React from 'react'
import { useUser, useFirestore, useFirestoreCollectionData } from 'reactfire'
import { User } from 'firebase/app'

import { Button, ButtonGroup, Text, Flex } from '@chakra-ui/react'

import { ICharacter } from 'interfaces-and-types/character-sheet.interface'

import { CharacterSheetContainer } from 'components/character-sheet/character-sheet-container.component'
import { RollFeed } from 'components/roll-feed/roll-feed.component'

export const DiceContext = React.createContext<any>(null)

const Session: React.FC = () => {
  const [character, setCharacter] = React.useState<ICharacter>()
  const user: User = useUser()

  const userCharactersCollectionQuery = useFirestore()
    .collection('characters')
    .where('characterDetails.playerId', '==', user.uid)

  const userCharacters: ICharacter[] = useFirestoreCollectionData(userCharactersCollectionQuery, { idField: 'docId' })
  const [dice, setDice] = React.useState({ greenDice: 0, yellowDice: 0 })
  return (
    <>
      {character ? (
        <>
          <DiceContext.Provider value={[dice, setDice]}>
            <Flex>
              <CharacterSheetContainer character={character} />
              <RollFeed />
            </Flex>
          </DiceContext.Provider>
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
