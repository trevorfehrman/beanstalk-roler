import * as React from 'react'

import { FiPlus, FiMinus } from 'react-icons/fi'
import { Button, Stack } from '@chakra-ui/react'

import { IDicePanel } from 'interfaces-and-types/roll.interface'

type DieProps = {
  name: keyof IDicePanel
  setFieldValue: (field: string, value: number) => void
  value: number
}

const Die: React.FC<DieProps> = ({ name, setFieldValue, value, children }) => {
  return (
    <Stack>
      <Button onClick={() => setFieldValue(name, Number(value) + 1)}>
        <FiPlus />
      </Button>
      {children}
      <Button disabled={value === 0} onClick={() => setFieldValue(name, Number(value) - 1)}>
        <FiMinus />
      </Button>
    </Stack>
  )
}

export { Die }
