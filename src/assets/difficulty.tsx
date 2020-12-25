import * as React from 'react'
import { Tooltip } from '@chakra-ui/react'
import { IconContainer } from 'styled-components/icon-container'

const Difficulty: React.FC<{ size: string }> = ({ size, children }) => {
  return (
    <Tooltip label="Difficulty">
      <div style={{ position: 'relative' }}>
        <svg width={size} height={size} viewBox="0 0 180 180" version="1.1" id="svg8">
          <g id="layer1">
            <g transform="matrix(1.4275934,0,0,1.4275934,91.823392,90.278611)" id="g741">
              <path
                fill="#7f389a"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M 49.2367,25 H -50.7481 L -0.617036,-61.2372 Z"
                id="path733"
              />
              <path
                fill="#7b3694"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M 0.617036,61.2372 -50.7481,25 h 99.9848 z"
                id="path735"
              />
              <path
                fill="#662d7b"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M 49.2367,25 -0.617036,-61.2372 50.7481,-25 Z"
                id="path737"
              />
              <path
                fill="#411d4e"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M -0.617036,-61.2372 -50.7481,25 l 1.5114,-50 z"
                id="path739"
              />
            </g>
          </g>
        </svg>
        <IconContainer top={'49%'} left={'50%'}>
          {children}
        </IconContainer>
      </div>
    </Tooltip>
  )
}

export { Difficulty }
