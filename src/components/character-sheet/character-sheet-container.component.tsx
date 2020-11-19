import * as React from 'react'
import { Formik } from 'formik'
import { useFirestore } from 'reactfire'

import { Button } from '@chakra-ui/react'

import { ICharacter } from './character-sheet.interface'

import { CharacterSheet } from 'components/character-sheet/character-sheet.component'
import { CharacterDetails } from 'components/character-sheet/character-details.component'

type CharacterSheetContainerProps = {
  character: ICharacter
}

const CharacterSheetContainer: React.FC<CharacterSheetContainerProps> = ({ character }) => {
  const [edit, setEdit] = React.useState(false)

  const characterDocRef = useFirestore().collection('characters').doc(character.docId)

  function handleSubmit(values: ICharacter) {
    characterDocRef.update(values)
  }

  return (
    <>
      <Button onClick={() => setEdit(isEdit => !isEdit)}>Edit Mode</Button>
      <Formik initialValues={character} onSubmit={handleSubmit}>
        {formik => (
          <form onClick={formik.handleSubmit}>
            <Button type="submit">Submit</Button>
            <CharacterSheet>
              <CharacterDetails
                getFieldProps={formik.getFieldProps}
                isEdit={edit}
                characterDetails={formik.values.characterDetails}
              />
            </CharacterSheet>
          </form>
        )}
      </Formik>
    </>
  )
}

export { CharacterSheetContainer }
