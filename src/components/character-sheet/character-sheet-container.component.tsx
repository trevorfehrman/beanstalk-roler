import * as React from 'react'
import { Formik, Form } from 'formik'
import { useFirestore } from 'reactfire'

import { Button, GridItem } from '@chakra-ui/react'

import { ICharacter } from './character-sheet.interface'

import { CharacterSheet, TemplateArea } from './character-sheet.component'
import { CharacterDetails } from './character-details.component'
import { CharacterDescription } from './character-description.component'
import { WoundStrainAndDefense } from './wound-strain-and-defense.component'
import { Xp } from './xp.component'
import { Attributes } from './attributes.component'
import { Skills } from './skills.component'

export const EditContext = React.createContext<boolean>(false)

type CharacterSheetContainerProps = {
  character: ICharacter
}

const CharacterSheetContainer: React.FC<CharacterSheetContainerProps> = ({ character }) => {
  const [edit, setEdit] = React.useState(false)

  const characterDocRef = useFirestore().collection('characters').doc(character.docId)

  function handleSubmit(values: ICharacter) {
    characterDocRef.update(values)
    setEdit(false)
  }

  return (
    <>
      <EditContext.Provider value={edit}>
        {!edit ? <Button onClick={() => setEdit(isEdit => !isEdit)}>Edit Mode</Button> : null}
        <Formik initialValues={character} onSubmit={handleSubmit}>
          <Form>
            {edit ? <Button type="submit">Submit</Button> : null}
            <CharacterSheet>
              <GridItem gridRow={TemplateArea.Details} gridColumn={TemplateArea.Details}>
                <CharacterDetails />
              </GridItem>
              <GridItem gridRow={TemplateArea.Description} gridColumn={TemplateArea.Description}>
                <CharacterDescription />
              </GridItem>
              <GridItem gridRow={TemplateArea.WoundStrain} gridColumn={TemplateArea.WoundStrain}>
                <WoundStrainAndDefense />
              </GridItem>
              <GridItem gridRow={TemplateArea.Xp} gridColumn={TemplateArea.Xp}>
                <Xp />
              </GridItem>
              <GridItem gridRow={TemplateArea.Attributes} gridColumn={TemplateArea.Attributes}>
                <Attributes />
              </GridItem>
              <GridItem gridRow={TemplateArea.Skills} gridColumn={TemplateArea.Skills}>
                <Skills />
              </GridItem>
            </CharacterSheet>
          </Form>
        </Formik>
      </EditContext.Provider>
    </>
  )
}

export { CharacterSheetContainer }
