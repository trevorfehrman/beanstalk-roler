import * as React from 'react'

import { Grid } from '@chakra-ui/react'

const templateAreas = `
  "details woundStrain woundStrain xp"
  "attributes attributes attributes attributes"
  "skills skills skills favors"
  "weapons weapons weapons weapons"
  "motivations motivations motivations description"
  "equipment equipment equipment description"
  "notes notes notes injuries"
  "talents talents talents talents"
`

const CharacterSheet: React.FC = ({ children }) => {
  return <Grid gridTemplateAreas={templateAreas}>{children}</Grid>
}

export { CharacterSheet }
