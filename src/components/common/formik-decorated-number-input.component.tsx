import * as React from 'react'
import { Field, useFormikContext } from 'formik'
import debounceFn from 'debounce-fn'

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

import { getLeaf } from 'utils/get-leaf'

import { ICharacter } from 'interfaces-and-types/character-sheet.interface'
import { FormikProps } from '../../interfaces-and-types/formik-props.type'

type FormikDecoratedNumberInputProps = {
  characterLeaf: string
  max?: string
  size?: 'sm' | 'md' | 'lg'
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
