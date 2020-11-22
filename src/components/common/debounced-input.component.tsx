import * as React from 'react'
import { useDebouncedCallback } from 'use-debounce'

import { Input } from '@chakra-ui/react'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DebouncedInput: React.FC<any> = (props: any) => {
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

export { DebouncedInput }
