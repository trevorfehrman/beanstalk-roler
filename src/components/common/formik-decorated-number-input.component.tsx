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

import { getLeaf } from 'utils/get-leaf'

import { ICharacter } from 'components/character-sheet/character-sheet.interface'

type FormikDecoratedNumberInputProps = {
  characterLeaf: string
  max?: string
  size?: 'sm' | 'md' | 'lg'
}

type FormikProps = {
  form: FormikHelpers<keyof ICharacter>
  field: FieldInputProps<keyof ICharacter>
}

const FormikDecoratedNumberInput: React.FC<FormikDecoratedNumberInputProps> = ({
  characterLeaf,
  max = '',
  size = 'lg',
}) => {
  const formik = useFormikContext<ICharacter>()

  const debounceSubmit = React.useRef(
    debounceFn(
      () => {
        return formik.submitForm()
      },
      { wait: 500 },
    ),
  )
  console.log(getLeaf(characterLeaf, formik.values))
  return (
    <Field name={characterLeaf}>
      {({ form, field }: FormikProps) => (
        <NumberInput
          min={0}
          max={getLeaf(max, formik.values) as number}
          value={getLeaf(characterLeaf, formik.values) as number}
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
