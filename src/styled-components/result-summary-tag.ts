import styled from '@emotion/styled'
import { Text } from '@chakra-ui/react'

const ResultSummaryTag = styled(Text)<{ background: string }>(props => ({
  color: 'white',
  marginRight: '.5rem',
  padding: '.5rem',
  backgroundColor: props.background,
  display: 'inline-block',
  borderTopLeftRadius: '.375rem',
  borderBottomLeftRadius: '.375rem',
}))

export { ResultSummaryTag }
