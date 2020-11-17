import * as React from 'react'
import { useUser, useFirestore, useFirestoreCollectionData } from 'reactfire'
import { User } from 'firebase/app'
import { ICharacter } from 'components/character-sheet/character-sheet.interface'

const AuthenticatedApp: React.FC = () => {
  const user: User = useUser()

  const userCharactersCollectionRef = useFirestore()
    .collection('characters')
    .where('characterDetails.playerId', '==', user.uid)
  const userCharacters: ICharacter[] = useFirestoreCollectionData(userCharactersCollectionRef)

  console.log(userCharacters[0].attributes.agility)

  return <div>authenticated</div>
}

export { AuthenticatedApp }
