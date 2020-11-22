import * as React from 'react'
import { useFormikContext } from 'formik'

import { Box, Stack } from '@chakra-ui/react'

import { getLeaf } from 'utils/get-leaf'

import { CharLeaf, ICharacter } from './character-sheet.interface'

import { FormikDecoratedNumberInput } from 'components/common/formik-decorated-number-input.component'
import { DebouncedInput } from 'components/common/debounced-input.component'

import { EditableTextLarge } from 'styled-components/editable-text-lg'
import { FormTag } from 'styled-components/form-tag'
import { EditContext } from './character-sheet-container.component'

const WoundStrainAndDefense: React.FC = () => {
  const formik = useFormikContext<ICharacter>()
  const edit = React.useContext(EditContext)
  return (
    <Stack spacing={3}>
      <div>
        <FormTag colorScheme="cyan">Wounds:</FormTag>
        <Box d="flex">
          <FormikDecoratedNumberInput characterLeaf={CharLeaf.WoundCurrent} max={CharLeaf.WoundTotal} />
          {!edit ? (
            <EditableTextLarge>{getLeaf(CharLeaf.WoundTotal, formik.values)}</EditableTextLarge>
          ) : (
            <DebouncedInput
              borderTopRightRadius={0}
              borderTopLeftRadius={0}
              {...formik.getFieldProps?.(CharLeaf.WoundTotal)}
              variant="filled"
              size="lg"
            />
          )}
        </Box>
      </div>
      <div>
        <FormTag colorScheme="cyan">Strain:</FormTag>
        <Box d="flex">
          <FormikDecoratedNumberInput characterLeaf={CharLeaf.StrainCurrent} max={CharLeaf.StrainTotal} />
          {!edit ? (
            <EditableTextLarge>{getLeaf(CharLeaf.StrainTotal, formik.values)}</EditableTextLarge>
          ) : (
            <DebouncedInput
              borderTopRightRadius={0}
              borderTopLeftRadius={0}
              {...formik.getFieldProps?.(CharLeaf.StrainTotal)}
              variant="filled"
              size="lg"
            />
          )}
        </Box>
      </div>
    </Stack>
  )
}

export { WoundStrainAndDefense }
