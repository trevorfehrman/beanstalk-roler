import * as React from 'react'

import { FiPlus, FiMinus } from 'react-icons/fi'
import { Button, Input, Stack } from '@chakra-ui/react'
import { IDicePanel } from 'interfaces-and-types/roll.interface'

type DieProps = {
  name: keyof IDicePanel
  getFieldProps: (field: string) => void
  setFieldValue: (field: string, value: number) => void
  value: number
}

const Die: React.FC<DieProps> = ({ name, getFieldProps, setFieldValue, value }) => {
  return (
    <Stack>
      <Button onClick={() => setFieldValue(name, Number(value) + 1)}>
        <FiPlus />
      </Button>
      <div>{name}</div>
      <Input size="lg" {...getFieldProps(name)} />
      <Button onClick={() => setFieldValue(name, Number(value) - 1)}>
        <FiMinus />
      </Button>
    </Stack>
  )
}

export { Die }
