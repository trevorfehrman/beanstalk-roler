import * as React from 'react'
import { useFirestore } from 'reactfire'

import { Input, Stack, Text, Button } from '@chakra-ui/react'

import { ICharacterDetails } from './character-sheet.interface'

type CharacterDetailsProps = {
  characterDetails: ICharacterDetails
  isEdit: boolean
  handleUpdate: (values: any) => void
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ characterDetails, isEdit, handleUpdate }) => {
  const [values, setValues] = React.useState<ICharacterDetails>({
    name: characterDetails.name,
    archetype: characterDetails.archetype,
    career: characterDetails.career,
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <Button onClick={() => handleUpdate(values)}>Submit</Button>
      {!isEdit ? (
        <Stack spacing={3}>
          <Text size="lg">{characterDetails.name}</Text>
          <Text size="md">{characterDetails.archetype}</Text>
          <Text size="md">{characterDetails.career}</Text>
        </Stack>
      ) : (
        <Stack spacing={3}>
          <Input onChange={handleChange} name="name" variant="filled" defaultValue={characterDetails.name} size="md" />
          <Input
            onChange={handleChange}
            name="archetype"
            variant="filled"
            defaultValue={characterDetails.archetype}
            size="md"
          />
          <Input
            onChange={handleChange}
            name="career"
            variant="filled"
            defaultValue={characterDetails.career}
            size="lg"
          />
        </Stack>
      )}
    </div>
  )
}

export { CharacterDetails }
