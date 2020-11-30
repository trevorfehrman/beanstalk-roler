import * as React from 'react'

const Failure: React.FC<{ size: string }> = ({ size }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 180 180" version="1.1" id="svg870">
      <g id="layer1">
        <path
          fill="#000"
          stroke="#000"
          strokeWidth="3"
          d="M 86.489215,153.87273 76.180124,98.891285 20.954634,89.981647 75.936077,79.672555 84.845715,24.447066 95.154807,79.428509 150.3803,88.338147 95.398853,98.647238 Z"
          transform="matrix(-0.9832149,0.9832149,-0.9832149,-0.9832149,261.36093,91.874677)"
        />
      </g>
    </svg>
  )
}

export { Failure }
