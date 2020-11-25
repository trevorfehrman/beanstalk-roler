import * as React from 'react'
import { Formik, Form, FieldInputProps, FormikHelpers, useFormik } from 'formik'

import { Button, HStack } from '@chakra-ui/react'

import { IDicePanel, IRoll } from 'interfaces-and-types/roll.interface'
import { initialDiceValues } from 'constants/dice-panel-initial-values.constant'

import { Die } from './die.component'
import { DiceContext } from 'screens/session'

export type FormikProps = {
  form: FormikHelpers<keyof IRoll>
  field: FieldInputProps<keyof IRoll>
}

const DicePanel: React.FC = () => {
  const [dice, setDice] = React.useContext(DiceContext)

  const formik = useFormik({
    initialValues: initialDiceValues,
    onSubmit: values => {
      console.log(values)
      formik.setValues(initialDiceValues)
    },
  })

  React.useEffect(() => {
    // TODO: Adding formik to dep array causes infinite loop
    formik.setValues({
      ...initialDiceValues,
      ability: dice.greenDice,
      proficiency: dice.yellowDice,
    })
  }, [dice])

  // TODO: add svg component as nested child of <Die>
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {JSON.stringify(dice)}
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
