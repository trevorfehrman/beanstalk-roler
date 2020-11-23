import * as React from 'react'

import { Stack } from '@chakra-ui/react'

import { CharLeaf } from '../../interfaces-and-types/character-sheet.interface'

import { TaggedTextInput } from 'components/common/tagged-text-input.component'

const CharacterDetails: React.FC = () => {
  return (
    <>
      <Stack spacing={3}>
        <TaggedTextInput title="Character Name:" characterLeaf={CharLeaf.Name} />
        <TaggedTextInput title="Archetype:" characterLeaf={CharLeaf.Archetype} />
        <TaggedTextInput title="Career:" characterLeaf={CharLeaf.Career} />
      </Stack>
    </>
  )
}

export { CharacterDetails }
