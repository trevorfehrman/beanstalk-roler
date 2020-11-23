import styled from '@emotion/styled'

const SkillBox = styled.span(props => ({
  backgroundColor: props.color,
  width: '3rem',
  height: '1.5rem',
  border: `1px solid grey`,
  position: 'relative',
  borderLeft: 'none',
  '&::after': {
    content: '""',
    height: '16px',
    width: '16px',
    backgroundColor: props.color,
    position: 'absolute',
    right: '-9px',
    top: '3px',
    transform: 'rotate(45deg)',
    border: '1px solid grey',
    borderLeft: 'none',
    borderBottom: 'none',
    zIndex: 1,
  },
}))

export { SkillBox }
