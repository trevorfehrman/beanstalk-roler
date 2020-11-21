import * as React from 'react'

import { Stack } from '@chakra-ui/react'

import { ICharacterDetails, CharLeaf } from './character-sheet.interface'

import { TaggedTextInput } from 'components/common/tagged-text-input.component'

type CharacterDetailsProps = {
  characterDetails: ICharacterDetails
  isEdit: boolean
  getFieldProps: (field: string) => void
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ characterDetails, isEdit, getFieldProps }) => {
  return (
    <>
      <Stack spacing={3}>
        <TaggedTextInput
          title="Character Name:"
          value={characterDetails.name}
          isEdit={isEdit}
          getFieldProps={getFieldProps}
          characterLeaf={CharLeaf.Name}
        />
        <TaggedTextInput
          title="Archetype:"
          value={characterDetails.archetype}
          isEdit={isEdit}
          getFieldProps={getFieldProps}
          characterLeaf={CharLeaf.Archetype}
        />
        <TaggedTextInput
          title="Career:"
          value={characterDetails.career}
          isEdit={isEdit}
          getFieldProps={getFieldProps}
          characterLeaf={CharLeaf.Career}
        />
      </Stack>
    </>
  )
}

export { CharacterDetails }
