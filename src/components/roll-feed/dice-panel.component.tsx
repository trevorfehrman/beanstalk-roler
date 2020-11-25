import * as React from 'react'
import { Formik, Form, FieldInputProps, FormikHelpers } from 'formik'

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

  function handleSubmit(values: IDicePanel) {
    console.log(values)
  }

  // TODO: add svg component as nested child of <Die>
  return (
    <div>
      <Formik
        initialValues={{
          ability: dice.greenDice,
          proficiency: dice.yellowDice,
          boost: 0,
          challenge: 0,
          difficulty: 0,
          setback: 0,
        }}
        onSubmit={handleSubmit}
      >
        {formik => (
          <Form>
            {JSON.stringify(dice)}
            <Button type="submit">Roll</Button>
            <HStack>
              <Die name="boost" />
              <Die name="setback" />
              <Die name="ability" />
              <Die name="difficulty" />
              <Die name="proficiency" />
              <Die name="challenge" />
            </HStack>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export { DicePanel }
