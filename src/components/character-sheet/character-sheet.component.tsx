import * as React from 'react'

import { Grid } from '@chakra-ui/react'

enum TemplateArea {
  Details = 'details',
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

export { CharacterSheet, TemplateArea }
