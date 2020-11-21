import * as React from 'react'

import { Box, Input, Stack } from '@chakra-ui/react'

import { CharLeaf, IWoundStrainAndDefense } from './character-sheet.interface'

import { FormikDecoratedNumberInput } from '../common/formik-decorated-number-input.component'
import { EditableTextLarge } from 'styled-components/editable-text-lg'
import { FormTag } from 'styled-components/form-tag'

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
    <Stack spacing={3}>
      <div>
        <FormTag colorScheme="cyan">Wounds:</FormTag>
        <Box d="flex">
          <FormikDecoratedNumberInput
            characterLeaf={CharLeaf.WoundCurrent}
            value={woundAndStrainDefense.woundThreshold.current}
            max={woundAndStrainDefense.woundThreshold.total}
          />
          {!isEdit ? (
            <EditableTextLarge>{woundAndStrainDefense.woundThreshold.total}</EditableTextLarge>
          ) : (
            <Input {...getFieldProps?.(CharLeaf.WoundTotal)} variant="filled" size="lg" />
          )}
        </Box>
      </div>
      <div>
        <FormTag colorScheme="cyan">Strain:</FormTag>
        <Box d="flex">
          <FormikDecoratedNumberInput
            characterLeaf={CharLeaf.StrainCurrent}
            value={woundAndStrainDefense.strainThreshold.current}
          />
          {!isEdit ? (
            <EditableTextLarge>{woundAndStrainDefense.strainThreshold.total}</EditableTextLarge>
          ) : (
            <Input {...getFieldProps?.(CharLeaf.StrainTotal)} variant="filled" size="lg" />
          )}
        </Box>
      </div>
    </Stack>
  )
}

export { WoundStrainAndDefense }
