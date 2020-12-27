import styled from '@emotion/styled'
import { Tag } from '@chakra-ui/react'

const SkillTag = styled(Tag)({
  borderRadius: 0,
  width: '10rem',
  border: '1px solid gray',
  borderBottomLeftRadius: '.375rem',
  borderTopLeftRadius: '.375rem',
  transition: 'all .1s ease-out',
  '&:hover': {
    filter: 'saturate(3)',
  },
})

export { SkillTag }
