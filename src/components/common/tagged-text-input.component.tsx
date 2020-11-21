import * as React from 'react'
import { useDebouncedCallback } from 'use-debounce'

import { Input } from '@chakra-ui/react'

import { FormTag } from 'styled-components/form-tag'
import { EditableTextLarge } from 'styled-components/editable-text-lg'

type TaggedTextInputProps = {
  title: string
  value: string
  isEdit: boolean
  characterLeaf: string
  getFieldProps: (field: string) => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputWrapper = (props: any) => {
  const [innerValue, setInnerValue] = React.useState('')

  React.useEffect(() => {
    if (props.value) {
      setInnerValue(props.value as string)
    } else {
      setInnerValue('')
    }
  }, [props.value])

  const debouncedHandleOnChange = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(event)
    }
  }, 200)

  const handleOnChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.persist()
      const newValue = event.currentTarget.value
      setInnerValue(newValue)
      debouncedHandleOnChange.callback(event)
    },
    [debouncedHandleOnChange],
  )

  return <Input {...props} value={innerValue} onChange={handleOnChange} />
}

const TaggedTextInput: React.FC<TaggedTextInputProps> = ({ value, title, characterLeaf, isEdit, getFieldProps }) => {
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
          <InputWrapper
            {...getFieldProps?.(characterLeaf)}
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
