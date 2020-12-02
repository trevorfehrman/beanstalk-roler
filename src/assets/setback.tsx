import * as React from 'react'
const Setback: React.FC<{ size: string }> = ({ size, children }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <svg width={size} height={size} viewBox="0 0 180 180" version="1.1" id="svg8">
        <g id="layer1">
          <g transform="matrix(1.31625,0,0,1.31625,91.45456,90.691318)" id="g997">
            <path
              fill="#363636"
              stroke="#000"
              strokeWidth="2"
              strokeLinejoin="round"
              d="m -38.112,29.8836 -5.9392,-93.9692 h 98.4808 l 5.9391,93.9692 z"
              id="path991"
            />
            <path
              fill="#363636"
              stroke="#000"
              strokeWidth="2"
              strokeLinejoin="round"
              d="M -54.4296,64.0856 -38.112,29.8836 H 60.3687 L 44.0512,64.0856 Z"
              id="path993"
            />
            <path
              fill="#1e1e1e"
              stroke="#000"
              strokeWidth="2"
              strokeLinejoin="round"
              d="m -60.3687,-29.8836 16.3175,-34.202 5.9392,93.9692 -16.3176,34.202 z"
              id="path995"
            />
          </g>
        </g>
      </svg>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '40%',
          left: '55%',
          transform: 'translateX(-50%) translateY(-50%)',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export { Setback }
