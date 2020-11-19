import * as React from 'react'

import { Input, Stack, Text } from '@chakra-ui/react'

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
          <Text size="lg">{characterDetails.name}</Text>
          <Text size="md">{characterDetails.archetype}</Text>
          <Text size="md">{characterDetails.career}</Text>
        </Stack>
      ) : (
        <Stack spacing={3}>
          <Input {...getFieldProps?.('characterDetails.name')} variant="filled" size="md" />
          <Input {...getFieldProps?.('characterDetails.archetype')} variant="filled" size="md" />
          <Input {...getFieldProps?.('characterDetails.career')} variant="filled" size="md" />
        </Stack>
      )}
    </div>
  )
}

export { CharacterDetails }
