import * as React from 'react'
import { ICharacter } from './character-sheet.interface'

const CharacterSheet: React.FC = ({ children }) => {
  return <div>{children}</div>
}

export { CharacterSheet }
