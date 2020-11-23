import * as React from 'react'
import { useFormikContext } from 'formik'

import { getLeaf } from 'utils/get-leaf'

import { FormTag } from 'styled-components/form-tag'
import { EditableTextLarge } from 'styled-components/editable-text-lg'

import { DebouncedInput } from './debounced-input.component'

import { EditContext } from 'components/character-sheet/character-sheet-container.component'
import { ICharacter } from 'interfaces-and-types/character-sheet.interface'

type TaggedTextInputProps = {
  title: string
  characterLeaf: string
}

const TaggedTextInput: React.FC<TaggedTextInputProps> = ({ title, characterLeaf }) => {
  const formik = useFormikContext<ICharacter>()
  const edit = React.useContext(EditContext)

  return (
    <>
      {!edit ? (
        <div>
          <FormTag colorScheme="cyan">{title}</FormTag>
          <EditableTextLarge>{getLeaf(characterLeaf, formik.values)}</EditableTextLarge>
        </div>
      ) : (
        <div>
          <FormTag colorScheme="cyan">{title}</FormTag>
          <DebouncedInput
            {...formik.getFieldProps?.(characterLeaf)}
            size="lg"
            borderTopLeftRadius={0}
            borderTopRightRadius={0}
            variant="filled"
            autoComplete="off"
          />
        </div>
      )}
    </>
  )
}

export { TaggedTextInput }
