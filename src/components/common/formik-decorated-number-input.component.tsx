import * as React from 'react'
import { Field, FieldInputProps, FormikHelpers, useFormikContext } from 'formik'
import debounceFn from 'debounce-fn'

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

import { ICharacter } from 'components/character-sheet/character-sheet.interface'

type FormikDecoratedNumberInputProps = {
  characterLeaf: string
  value: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
}

type FormikProps = {
  form: FormikHelpers<keyof ICharacter>
  field: FieldInputProps<keyof ICharacter>
}

const FormikDecoratedNumberInput: React.FC<FormikDecoratedNumberInputProps> = ({
  characterLeaf,
  value,
  max,
  size = 'lg',
}) => {
  const formik = useFormikContext()

  const debounceSubmit = React.useRef(
    debounceFn(
      () => {
        return formik.submitForm()
      },
      { wait: 500 },
    ),
  )
  return (
    <Field name={characterLeaf}>
      {({ form, field }: FormikProps) => (
        <NumberInput
          min={0}
          max={max && max}
          value={value}
          onChange={val => {
            form.setFieldValue(field.name, val)
            debounceSubmit.current()
          }}
          size={size}
        >
          <NumberInputField borderTopRightRadius="0" borderTopLeftRadius="0" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      )}
    </Field>
  )
}

export { FormikDecoratedNumberInput }
