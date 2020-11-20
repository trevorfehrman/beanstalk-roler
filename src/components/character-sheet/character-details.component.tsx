import * as React from 'react'

import { Input, Stack, Text } from '@chakra-ui/react'
import { EditableTextLarge } from 'styled-components/editable-text-lg'

import { ICharacterDetails } from './character-sheet.interface'

type CharacterDetailsProps = {
  characterDetails: ICharacterDetails
  isEdit: boolean
  getFieldProps: (field: string) => void
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ characterDetails, isEdit, getFieldProps }) => {
  return (
    <div>
      {!isEdit ? (
        <Stack spacing={3}>
          <EditableTextLarge>{characterDetails.name}</EditableTextLarge>
          <EditableTextLarge>{characterDetails.archetype}</EditableTextLarge>
          <EditableTextLarge>{characterDetails.career}</EditableTextLarge>
        </Stack>
      ) : (
        <Stack spacing={3}>
          <Input {...getFieldProps?.('characterDetails.name')} variant="filled" size="lg" />
          <Input {...getFieldProps?.('characterDetails.archetype')} variant="filled" size="lg" />
          <Input {...getFieldProps?.('characterDetails.career')} variant="filled" size="lg" />
        </Stack>
      )}
    </div>
  )
}

export { CharacterDetails }
