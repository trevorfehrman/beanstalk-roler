import * as React from 'react'
import { Field, useFormikContext } from 'formik'

import { FiPlus, FiMinus } from 'react-icons/fi'
import { Flex, useTheme, Text } from '@chakra-ui/react'

import { FormikProps } from 'interfaces-and-types/formik-props.type'
import { ICharacter } from 'interfaces-and-types/character-sheet.interface'

import { getRelatedAttribute } from 'utils/get-related-attribute'
import { EditContext } from 'components/character-sheet/character-sheet-container.component'
import { useDice } from 'hooks/use-dice.hook'

import { SkillBox } from 'styled-components/skill-box'
import { SkillTag } from 'styled-components/skill-tag'
import { SkillButton } from 'styled-components/skill-button'
import { skillNameMap } from 'constants/skill-name-map.constant'
import { SkillContext } from 'screens/session'

type SkillProps = {
  leafKey: string
  skillValue: number
  path: string
}

const Skill: React.FC<SkillProps> = ({ skillValue, path, leafKey }) => {
  const formik = useFormikContext<ICharacter>()
  const edit = React.useContext(EditContext)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSkillRoll] = React.useContext(SkillContext)
  const theme = useTheme()
  const relatedAttributeValue = formik.getFieldProps(getRelatedAttribute(leafKey)).value
  const [dice] = useDice(relatedAttributeValue, skillValue)

  return (
    <Flex align="flex-start" margin=".5rem" direction="column">
      <Flex cursor="pointer" onClick={() => setSkillRoll({ ...dice, skillName: skillNameMap[leafKey] })}>
        <SkillTag colorScheme="cyan">{skillNameMap[leafKey]}</SkillTag>
        {Array.from({ length: dice.yellowDice }).map((_, i) => (
          <SkillBox color={theme.colors.brand.yellow} key={i} />
        ))}
        {Array.from({ length: dice.greenDice }).map((_, i) => (
          <SkillBox color={theme.colors.brand.green} key={i} />
        ))}
        {Array.from({ length: 5 - (dice.yellowDice + dice.greenDice) }).map((_, i) => (
          <SkillBox color="white" key={i} />
        ))}
      </Flex>
      {edit ? (
        <Field name={path}>
          {({ form, field }: FormikProps) => (
            <Flex>
              <SkillButton
                isDisabled={dice.yellowDice === 0}
                onClick={() => form.setFieldValue(field.name, Number(field.value) - 1)}
              >
                <FiMinus />
              </SkillButton>
              <SkillButton
                isDisabled={dice.yellowDice + dice.greenDice === 5}
                onClick={() => form.setFieldValue(field.name, Number(field.value) + 1)}
              >
                <FiPlus />
              </SkillButton>
              <Text marginLeft=".5rem"> Ranking: {field.value}</Text>
            </Flex>
          )}
        </Field>
      ) : null}
    </Flex>
  )
}

export { Skill }
