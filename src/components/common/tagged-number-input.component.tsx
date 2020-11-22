import * as React from 'react'

import { FormikDecoratedNumberInput } from './formik-decorated-number-input.component'
import { FormTag } from 'styled-components/form-tag'

type TaggedNumberInputProps = {
  characterLeaf: string
  title: string
  size?: 'sm' | 'md' | 'lg'
}

const TaggedNumberInput: React.FC<TaggedNumberInputProps> = ({ characterLeaf, title, size = 'lg' }) => {
  return (
    <div>
      <FormTag colorScheme="cyan" size={size} width="100%" justifyContent="center">
        {title}
      </FormTag>
      <FormikDecoratedNumberInput characterLeaf={characterLeaf} />
    </div>
  )
}

export { TaggedNumberInput }
