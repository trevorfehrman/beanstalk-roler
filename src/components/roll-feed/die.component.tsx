import * as React from 'react'
import { useFormikContext } from 'formik'

import { FiPlus, FiMinus } from 'react-icons/fi'
import { Button, Input, Stack } from '@chakra-ui/react'
import { IDicePanel } from 'interfaces-and-types/roll.interface'

const Die: React.FC<{ name: keyof IDicePanel }> = ({ name }) => {
  const formik = useFormikContext<IDicePanel>()
  return (
    <Stack>
      <Button onClick={() => formik.setFieldValue(name, Number(formik.values[name]) + 1)}>
        <FiPlus />
      </Button>
      <div>{name}</div>
      <Input size="lg" {...formik.getFieldProps(name)} />
      <Button onClick={() => formik.setFieldValue(name, Number(formik.values[name]) - 1)}>
        <FiMinus />
      </Button>
    </Stack>
  )
}

export { Die }
