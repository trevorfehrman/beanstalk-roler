import styled from '@emotion/styled'

const IconContainer = styled('div')<{ top: string; left: string }>(({ top, left }) => ({
  display: 'flex',
  position: 'absolute',
  top,
  left,
  transform: 'translateX(-50%) translateY(-50%)',
}))

export { IconContainer }
