import * as React from 'react'

import { Stack, Box } from '@chakra-ui/react'

import { CharLeaf } from '../../interfaces-and-types/character-sheet.interface'

import { TaggedTextInput } from 'components/common/tagged-text-input.component'

const CharacterDescription: React.FC = () => {
  return (
    <Box d="flex" gridGap=".5rem">
      <Stack flexGrow={1} spacing={3}>
        <TaggedTextInput title="Gender:" characterLeaf={CharLeaf.Gender} />
        <TaggedTextInput title="Age:" characterLeaf={CharLeaf.Age} />
        <TaggedTextInput title="Height:" characterLeaf={CharLeaf.Height} />
      </Stack>
      <Stack flexGrow={1} spacing={3}>
        <TaggedTextInput title="Build:" characterLeaf={CharLeaf.Biuld} />
        <TaggedTextInput title="Hair:" characterLeaf={CharLeaf.Hair} />
        <TaggedTextInput title="Eyes:" characterLeaf={CharLeaf.Eyes} />
      </Stack>
    </Box>
  )
}

export { CharacterDescription }
