import * as React from 'react'
import { Field, useFormikContext } from 'formik'

import { FiPlus, FiMinus } from 'react-icons/fi'
import { Button, Box, Tag, Text } from '@chakra-ui/react'

import { FormikProps } from 'components/common/formik-types'
import { ICharacter } from 'components/character-sheet/character-sheet.interface'
import { getRelatedAttribute } from 'utils/related-attribute'

import { EditContext } from 'components/character-sheet/character-sheet-container.component'

type SkillProps = {
  leafKey: string
  skillValue: number
  path: string
}

const Skill: React.FC<SkillProps> = ({ skillValue, path, leafKey }) => {
  const edit = React.useContext(EditContext)
  const formik = useFormikContext<ICharacter>()

  const relatedAttributeValue = formik.getFieldProps(getRelatedAttribute(leafKey)).value
  console.log(relatedAttributeValue, leafKey)

  return (
    <Box d="flex">
      <Tag colorScheme="cyan">{leafKey}</Tag>
      <Text>{skillValue}</Text>
      {edit ? (
        <Field name={path}>
          {({ form, field }: FormikProps) => (
            <>
              <Button onClick={() => form.setFieldValue(field.name, Number(field.value) - 1)}>
                <FiMinus />
              </Button>
              <Button onClick={() => form.setFieldValue(field.name, Number(field.value) + 1)}>
                <FiPlus />
              </Button>
            </>
          )}
        </Field>
      ) : null}
    </Box>
  )
}

export { Skill }
