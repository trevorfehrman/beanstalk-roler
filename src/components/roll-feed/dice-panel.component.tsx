import * as React from 'react'
import { FieldInputProps, FormikHelpers, useFormik } from 'formik'
import { firestore } from 'firebase'

import { Button, HStack, Text, Tooltip } from '@chakra-ui/react'

import { IRoll } from 'interfaces-and-types/roll.interface'
import { initialDiceValues } from 'constants/dice-panel-initial-values.constant'
import { rollDice } from 'utils/roll-dice'

import { DiceContext } from 'screens/session'

import { Boost } from 'assets/boost'
import { Setback } from 'assets/setback'
import { Ability } from 'assets/ability'
import { Difficulty } from 'assets/difficulty'
import { Proficiency } from 'assets/proficiency'
import { Challenge } from 'assets/challenge'

import { Die } from './panel-die.component'

export type FormikProps = {
  form: FormikHelpers<keyof IRoll>
  field: FieldInputProps<keyof IRoll>
}

const DicePanel: React.FC<{
  rollsRef: firestore.CollectionReference
  characterName: string
}> = ({ rollsRef, characterName }) => {
  const [dice, setDice] = React.useContext(DiceContext)

  const formik = useFormik({
    initialValues: initialDiceValues,
    onSubmit: dicePanelInput => {
      formik.setValues(initialDiceValues)
      setDice({ greenDice: 0, yellowDice: 0 })
      const [roll, results] = rollDice(dicePanelInput)

      // Firebase will not accept nested arrays, so I'm serializing the object.
      rollsRef.add({ roll: JSON.stringify(roll), createdAt: Date.now(), characterName, results })
    },
  })

  React.useEffect(() => {
    // TODO: Adding formik to dep array causes infinite loop
    formik.setValues({
      ...formik.values,
      ability: dice.greenDice,
      proficiency: dice.yellowDice,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dice])

  function clearValues() {
    formik.setValues({
      ...initialDiceValues,
    })
  }

  return (
    <div style={{ padding: '1rem', border: '2px solid lightgray', borderRadius: '.375rem', marginTop: '1rem' }}>
      <form onSubmit={formik.handleSubmit}>
        <Button marginBottom="1rem" marginRight="1rem" type="submit" colorScheme="teal">
          Roll
        </Button>
        <Button marginBottom="1rem" onClick={clearValues} colorScheme="orange">
          Clear
        </Button>
        <HStack>
          <Die name="boost" setFieldValue={formik.setFieldValue} value={formik.values.boost}>
            <Boost size="4rem">
              <Text color="#ececec">{formik.values.boost}</Text>
            </Boost>
          </Die>
          <Die name="setback" setFieldValue={formik.setFieldValue} value={formik.values.setback}>
            <Setback size="4rem">
              <Text color="#ececec">{formik.values.setback}</Text>
            </Setback>
          </Die>
          <Die name="ability" setFieldValue={formik.setFieldValue} value={formik.values.ability}>
            <Ability size="4rem">
              <Text color="#ececec">{formik.values.ability}</Text>
            </Ability>
          </Die>
          <Die name="difficulty" setFieldValue={formik.setFieldValue} value={formik.values.difficulty}>
            <Difficulty size="4rem">
              <Text color="#ececec">{formik.values.difficulty}</Text>
            </Difficulty>
          </Die>
          <Die name="proficiency" setFieldValue={formik.setFieldValue} value={formik.values.proficiency}>
            <Proficiency size="4rem">
              <Text color="#fff">{formik.values.proficiency}</Text>
            </Proficiency>
          </Die>
          <Die name="challenge" setFieldValue={formik.setFieldValue} value={formik.values.challenge}>
            <Challenge size="4rem">
              <Text color="#ececec">{formik.values.challenge}</Text>
            </Challenge>
          </Die>
        </HStack>
      </form>
    </div>
  )
}

export { DicePanel }
