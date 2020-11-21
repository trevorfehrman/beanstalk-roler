import * as React from 'react'

import { Input } from '@chakra-ui/react'

import { FormTag } from 'styled-components/form-tag'
import { EditableTextLarge } from 'styled-components/editable-text-lg'

type TaggedTextInput = {
  title: string
  value: string
  isEdit: boolean
  characterLeaf: string
  getFieldProps: (field: string) => void
}

const TaggedTextInput: React.FC<TaggedTextInput> = ({ value, title, characterLeaf, isEdit, getFieldProps }) => {
  return (
    <>
      {!isEdit ? (
        <div>
          <FormTag colorScheme="cyan">{title}</FormTag>
          <EditableTextLarge>{value}</EditableTextLarge>
        </div>
      ) : (
        <div>
          <FormTag colorScheme="cyan">{title}</FormTag>
          <Input {...getFieldProps?.(characterLeaf)} variant="filled" size="lg" autoComplete="off" />
        </div>
      )}
    </>
  )
}

export { TaggedTextInput }
