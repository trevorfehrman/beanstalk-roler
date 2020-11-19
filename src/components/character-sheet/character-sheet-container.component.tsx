import * as React from 'react'
import { Formik } from 'formik'
import { useFirestore } from 'reactfire'

import { Button, GridItem } from '@chakra-ui/react'

import { ICharacter } from './character-sheet.interface'

import { CharacterSheet } from './character-sheet.component'
import { CharacterDetails } from './character-details.component'
import { WoundStrainAndDefense } from './wound-strain-and-defense.component'
import { Xp } from './xp.component'
import { Attributes } from './attributes.component'

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
              <GridItem gridRow="details" gridColumn="details">
                <CharacterDetails
                  getFieldProps={formik.getFieldProps}
                  isEdit={edit}
                  characterDetails={formik.values.characterDetails}
                />
              </GridItem>
              <GridItem gridRow="woundStrain" gridColumn="woundStrain">
                <WoundStrainAndDefense />
              </GridItem>
              <GridItem gridRow="xp" gridColumn="xp">
                <Xp />
              </GridItem>
              <GridItem gridRow="attributes" gridColumn="attributes">
                <Attributes />
              </GridItem>
            </CharacterSheet>
          </form>
        )}
      </Formik>
    </>
  )
}

export { CharacterSheetContainer }
