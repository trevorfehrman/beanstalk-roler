import styled from '@emotion/styled'
import { Text } from '@chakra-ui/react'

const EditableTextLarge = styled(Text)({
  fontSize: '1.125rem',
  padding: '1px calc(1rem + 1px) 1px calc(1rem + 1px)',
  height: '3rem',
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #E2E8F0',
  borderRadius: '.375rem',
  borderTopRightRadius: 0,
  borderTopLeftRadius: 0,
  width: '100%',
})

export { EditableTextLarge }
