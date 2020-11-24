import * as React from 'react'
import { Formik, Form } from 'formik'
import { useFirestore } from 'reactfire'

import styled from '@emotion/styled'

import { Button } from '@chakra-ui/react'

import { ICharacter } from '../../interfaces-and-types/character-sheet.interface'

import { CharacterSheet, TemplateArea } from './character-sheet.component'
import { CharacterDetails } from './character-details.component'
import { CharacterDescription } from './character-description.component'
import { WoundStrainAndDefense } from './wound-strain-and-defense.component'
import { Xp } from './xp.component'
import { Attributes } from './attributes.component'
import { Skills } from './skills.component'
import { SheetSection } from 'components/common/sheet-section.component'

export const EditContext = React.createContext<boolean>(false)

const StyledForm = styled(Form)({
  width: '66%',
})

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
        <Formik initialValues={character} onSubmit={handleSubmit}>
          <StyledForm>
            {edit ? <Button type="submit">Submit</Button> : null}
            {!edit ? <Button onClick={() => setEdit(isEdit => !isEdit)}>Edit Mode</Button> : null}
            <CharacterSheet>
              <SheetSection title="Details:" gridRow={TemplateArea.Details} gridColumn={TemplateArea.Details}>
                <CharacterDetails />
                <CharacterDescription />
              </SheetSection>
              <SheetSection
                title="Thresholds and Xp:"
                gridRow={TemplateArea.WoundStrain}
                gridColumn={TemplateArea.WoundStrain}
              >
                <WoundStrainAndDefense />
                <Xp />
              </SheetSection>
              <SheetSection title="Attributes:" gridRow={TemplateArea.Attributes} gridColumn={TemplateArea.Attributes}>
                <Attributes />
              </SheetSection>
              <SheetSection title="Skills:" gridRow={TemplateArea.Skills} gridColumn={TemplateArea.Skills}>
                <Skills />
              </SheetSection>
            </CharacterSheet>
          </StyledForm>
        </Formik>
      </EditContext.Provider>
    </>
  )
}

export { CharacterSheetContainer }
