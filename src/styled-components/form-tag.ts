import styled from '@emotion/styled'

import { Tag } from '@chakra-ui/react'

const FormTag = styled(Tag)(({ justify = 'center' }: { justify?: string }) => ({
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  width: '100%',
  justifyContent: justify,
}))

export { FormTag }
