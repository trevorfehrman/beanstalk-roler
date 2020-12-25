import * as React from 'react'
import { Tooltip } from '@chakra-ui/react'

import { IconContainer } from 'styled-components/icon-container'

const Boost: React.FC<{ size: string }> = ({ size, children }) => {
  return (
    <Tooltip label="Boost">
      <div style={{ position: 'relative' }}>
        <svg width={size} height={size} viewBox="0 0 180 180" version="1.1" id="svg8">
          <g id="layer1">
            <g transform="matrix(1.2790435,0,0,1.3101501,92.021526,88.199785)" id="g980">
              <path
                fill="#679cbc"
                stroke="#000"
                strokeWidth="2"
                strokeLinejoin="round"
                d="m -38.112,29.8836 -5.9392,-93.9692 h 98.4808 l 5.9391,93.9692 z"
                id="path974"
              />
              <path
                fill="#679cbc"
                stroke="#000"
                strokeWidth="2"
                strokeLinejoin="round"
                d="M -54.4296,64.0856 -38.112,29.8836 H 60.3687 L 44.0512,64.0856 Z"
                id="path976"
              />
              <path
                fill="#3a586a"
                stroke="#000"
                strokeWidth="2"
                strokeLinejoin="round"
                d="m -60.3687,-29.8836 16.3175,-34.202 5.9392,93.9692 -16.3176,34.202 z"
                id="path978"
              />
            </g>
          </g>
        </svg>
        <IconContainer top={'40%'} left={'58%'}>
          {children}
        </IconContainer>
      </div>
    </Tooltip>
  )
}

export { Boost }
