import * as React from 'react'

const Advantage: React.FC<{ size: string; color: string }> = ({ size, color }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 180 180" version="1.1" id="svg8">
      <g transform="matrix(0.3590116,0,0,0.3590116,78.670713,66.98423)" id="g1829">
        <g id="g1844" transform="matrix(0,-5.2221556,4.7450615,0,30.114807,126.89313)">
          <path fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" d="M 0,0 -28.8675,50" id="path1817" />
          <path fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" d="M 0,0 -28.8675,-50" id="path1819" />
          <path
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            d="M -28.8675,50 57.735,0"
            id="path1825"
          />
          <path
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            d="M -28.8675,-50 57.735,0"
            id="path1827"
          />
        </g>
      </g>
    </svg>
  )
}

export { Advantage }
