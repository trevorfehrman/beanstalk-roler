import { ICharacterDetails } from 'components/character-sheet/character-sheet.interface'
import { firestore } from 'firebase/app'
function updateDoc(ref: firestore.DocumentReference, path: string, values: ICharacterDetails): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateObject: any = {}

  for (const [key, value] of Object.entries(values)) {
    updateObject[`${path}.${key}`] = value
  }

  ref.update(updateObject)
}

export { updateDoc }
