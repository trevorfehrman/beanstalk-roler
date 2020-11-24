import * as React from 'react'
import styled from '@emotion/styled'

import { Grid } from '@chakra-ui/react'

enum TemplateArea {
  Details = 'details',
  Description = 'description',
  WoundStrain = 'woundStrain',
  Xp = 'xp',
  Attributes = 'attributes',
  Skills = 'skills',
  Weapons = 'weapons',
  Motivations = 'motivations',
  Equipment = 'equipment',
  Notes = 'notest',
  Talents = 'talents',
}
const templateAreas2 = `
  "details woundStrain"
  "attributes attributes"
  "skills skills"
  "weapons weapons"
  "motivations favors"
  "equipment equipment"
  "notes injuries"
  "talents talents"
`

const CharacterSheetGrid = styled(Grid)({
  margin: '1rem',
  gridGap: '.5rem',
  padding: '1rem',
  border: '1px solid lightgray',
  borderRadius: '.375rem',
})

const CharacterSheet: React.FC = ({ children }) => {
  return <CharacterSheetGrid gridTemplateAreas={templateAreas2}>{children}</CharacterSheetGrid>
}

export { CharacterSheet, TemplateArea }
