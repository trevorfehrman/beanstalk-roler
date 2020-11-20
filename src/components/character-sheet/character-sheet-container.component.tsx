import * as React from 'react'
import { Formik } from 'formik'
import { useFirestore } from 'reactfire'

import { Button, GridItem } from '@chakra-ui/react'

import { ICharacter } from './character-sheet.interface'

import { CharacterSheet, TemplateArea } from './character-sheet.component'
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
    // TODO: turn this back on ya ding dong
    characterDocRef.update(values)
    setEdit(false)
  }

  return (
    <>
      {!edit ? <Button onClick={() => setEdit(isEdit => !isEdit)}>Edit Mode</Button> : null}
      <Formik initialValues={character} onSubmit={handleSubmit}>
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            {edit ? <Button type="submit">Submit</Button> : null}
            <CharacterSheet>
              <GridItem gridRow={TemplateArea.Details} gridColumn={TemplateArea.Details}>
                <CharacterDetails
                  getFieldProps={formik.getFieldProps}
                  isEdit={edit}
                  characterDetails={formik.values.characterDetails}
                />
              </GridItem>
              <GridItem gridRow={TemplateArea.WoundStrain} gridColumn={TemplateArea.WoundStrain}>
                <WoundStrainAndDefense
                  getFieldProps={formik.getFieldProps}
                  isEdit={edit}
                  woundAndStrainDefense={formik.values.woundStrainAndDefense}
                />
              </GridItem>
              <GridItem gridRow={TemplateArea.Xp} gridColumn={TemplateArea.Xp}>
                <Xp />
              </GridItem>
              <GridItem gridRow={TemplateArea.Attributes} gridColumn={TemplateArea.Attributes}>
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
