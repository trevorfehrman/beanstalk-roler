import * as React from 'react'
import { useFirestore } from 'reactfire'

import { Input, Stack, Text, Button } from '@chakra-ui/react'

import { ICharacterDetails } from './character-sheet.interface'

type CharacterDetailsProps = {
  characterDetails: ICharacterDetails
  docId: string
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ characterDetails, docId }) => {
  const [edit, setEdit] = React.useState(false)
  const [values, setValues] = React.useState<ICharacterDetails>({ name: '', archetype: '', career: '' })

  React.useEffect(() => {
    setValues({
      name: characterDetails.name,
      archetype: characterDetails.archetype,
      career: characterDetails.career,
    })
  }, [characterDetails.archetype, characterDetails.career, characterDetails.name])

  const characterRef = useFirestore().collection('characters').doc(docId)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  function handleSubmit(path: string, values: ICharacterDetails) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateObject: any = {}

    for (const [key, value] of Object.entries(values)) {
      updateObject[`${path}.${key}`] = value
    }

    characterRef.update(updateObject)
  }

  return (
    <div>
      <Button onClick={() => handleSubmit('characterDetails', values)}>Submit</Button>
      <Button onClick={() => setEdit(isEditing => !isEditing)}>Edit Mode</Button>
      {!edit ? (
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
