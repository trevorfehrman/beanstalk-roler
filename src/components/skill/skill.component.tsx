import * as React from 'react'
import { Field, useFormikContext } from 'formik'

import { FiPlus, FiMinus } from 'react-icons/fi'
import { Button, Box, Tag } from '@chakra-ui/react'

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
  const [dice, setDice] = React.useState({ greenDice: 0, yellowDice: 0 })

  const formik = useFormikContext<ICharacter>()
  const edit = React.useContext(EditContext)

  const relatedAttributeValue = formik.getFieldProps(getRelatedAttribute(leafKey)).value

  React.useEffect(() => {
    function determineDice() {
      const greenDice = Math.abs(skillValue - relatedAttributeValue)
      const yellowDice = skillValue <= relatedAttributeValue ? skillValue : relatedAttributeValue
      setDice({ greenDice, yellowDice })
    }
    determineDice()
  }, [relatedAttributeValue, skillValue])

  return (
    <Box d="flex">
      <Tag colorScheme="cyan">{leafKey}</Tag>
      {Array.from({ length: dice.yellowDice }).map((_, i) => (
        <span key={i}>yellow</span>
      ))}
      {Array.from({ length: dice.greenDice }).map((_, i) => (
        <span key={i}>green</span>
      ))}
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
