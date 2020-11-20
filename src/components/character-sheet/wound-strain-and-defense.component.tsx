import * as React from 'react'

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Box,
  Input,
} from '@chakra-ui/react'

import { Field, FieldInputProps, FormikProps } from 'formik'

import { EditableTextLarge } from 'styled-components/editable-text-lg'

import { IWoundStrainAndDefense } from './character-sheet.interface'

type WoundStrainAndDefenseProps = {
  isEdit: boolean
  woundAndStrainDefense: IWoundStrainAndDefense
  getFieldProps: (field: string) => void
}

const WoundStrainAndDefense: React.FC<WoundStrainAndDefenseProps> = ({
  isEdit,
  woundAndStrainDefense,
  getFieldProps,
}) => {
  return (
    <>
      <Box d="flex">
        <Field name="woundStrainAndDefense.woundThreshold.current">
          {/* {(formField: any) => ( */}
          {({
            form,
            field,
          }: {
            form: FormikProps<IWoundStrainAndDefense>
            field: FieldInputProps<IWoundStrainAndDefense>
          }) => (
            <NumberInput
              value={woundAndStrainDefense.woundThreshold.current}
              onChange={val => form.setFieldValue(field.name, val)}
              size="lg"
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          )}
        </Field>
        {!isEdit ? (
          <EditableTextLarge>{woundAndStrainDefense.woundThreshold.total}</EditableTextLarge>
        ) : (
          <Input {...getFieldProps?.('woundStrainAndDefense.woundThreshold.total')} variant="filled" size="lg" />
        )}
      </Box>
    </>
  )
}

export { WoundStrainAndDefense }
