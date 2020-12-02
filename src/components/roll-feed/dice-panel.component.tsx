import * as React from 'react'
import { FieldInputProps, FormikHelpers, useFormik } from 'formik'
import { firestore } from 'firebase'

import { Button, HStack } from '@chakra-ui/react'

import { IRoll } from 'interfaces-and-types/roll.interface'
import { initialDiceValues } from 'constants/dice-panel-initial-values.constant'
import { rollDice } from 'utils/roll-dice'

import { Die } from './panel-die.component'
import { DiceContext } from 'screens/session'

export type FormikProps = {
  form: FormikHelpers<keyof IRoll>
  field: FieldInputProps<keyof IRoll>
}

const DicePanel: React.FC<{ rollsRef: firestore.CollectionReference; characterName: string }> = ({
  rollsRef,
  characterName,
}) => {
  const [dice, setDice] = React.useContext(DiceContext)

  const formik = useFormik({
    initialValues: initialDiceValues,
    onSubmit: dicePanelInput => {
      formik.setValues(initialDiceValues)
      setDice({ greenDice: 0, yellowDice: 0 })
      const [roll, results] = rollDice(dicePanelInput)

      // Firebase will not accept nested arrays, so I'm serializing the object.
      rollsRef.add({ roll: JSON.stringify(roll), createdAt: Date.now(), characterName })
    },
  })

  React.useEffect(() => {
    // TODO: Adding formik to dep array causes infinite loop
    formik.setValues({
      ...initialDiceValues,
      ability: dice.greenDice,
      proficiency: dice.yellowDice,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dice])

  // TODO: add svg component as nested child of <Die>
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Button type="submit">Roll</Button>
        <HStack>
          <Die
            name="boost"
            getFieldProps={formik.getFieldProps}
            setFieldValue={formik.setFieldValue}
            value={formik.values.boost}
          />
          <Die
            name="setback"
            getFieldProps={formik.getFieldProps}
            setFieldValue={formik.setFieldValue}
            value={formik.values.setback}
          />
          <Die
            name="ability"
            getFieldProps={formik.getFieldProps}
            setFieldValue={formik.setFieldValue}
            value={formik.values.ability}
          />
          <Die
            name="difficulty"
            getFieldProps={formik.getFieldProps}
            setFieldValue={formik.setFieldValue}
            value={formik.values.difficulty}
          />
          <Die
            name="proficiency"
            getFieldProps={formik.getFieldProps}
            setFieldValue={formik.setFieldValue}
            value={formik.values.proficiency}
          />
          <Die
            name="challenge"
            getFieldProps={formik.getFieldProps}
            setFieldValue={formik.setFieldValue}
            value={formik.values.challenge}
          />
        </HStack>
      </form>
    </div>
  )
}

export { DicePanel }
