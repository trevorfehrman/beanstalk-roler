import * as React from 'react'

import { Stack, Box } from '@chakra-ui/react'

import { ICharacterDescription, CharLeaf } from './character-sheet.interface'

import { TaggedTextInput } from 'components/common/tagged-text-input.component'

type CharacterDescriptionProps = {
  characterDescription: ICharacterDescription
  isEdit: boolean
  getFieldProps: (field: string) => void
}

const CharacterDescription: React.FC<CharacterDescriptionProps> = ({ characterDescription, isEdit, getFieldProps }) => {
  return (
    <Box d="flex" gridGap=".5rem">
      <Stack flexGrow={1} spacing={3}>
        <TaggedTextInput
          title="Gender:"
          value={characterDescription.gender}
          isEdit={isEdit}
          getFieldProps={getFieldProps}
          characterLeaf={CharLeaf.Gender}
        />
        <TaggedTextInput
          title="Age:"
          value={characterDescription.age}
          isEdit={isEdit}
          getFieldProps={getFieldProps}
          characterLeaf={CharLeaf.Age}
        />
        <TaggedTextInput
          title="Height:"
          value={characterDescription.height}
          isEdit={isEdit}
          getFieldProps={getFieldProps}
          characterLeaf={CharLeaf.Height}
        />
      </Stack>
      <Stack flexGrow={1} spacing={3}>
        <TaggedTextInput
          title="Build:"
          value={characterDescription.build}
          isEdit={isEdit}
          getFieldProps={getFieldProps}
          characterLeaf={CharLeaf.Biuld}
        />
        <TaggedTextInput
          title="Hair:"
          value={characterDescription.hair}
          isEdit={isEdit}
          getFieldProps={getFieldProps}
          characterLeaf={CharLeaf.Hair}
        />
        <TaggedTextInput
          title="Eyes:"
          value={characterDescription.eyes}
          isEdit={isEdit}
          getFieldProps={getFieldProps}
          characterLeaf={CharLeaf.Eyes}
        />
      </Stack>
    </Box>
  )
}

export { CharacterDescription }
