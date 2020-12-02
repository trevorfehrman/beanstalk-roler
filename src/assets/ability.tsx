import * as React from 'react'

const Ability: React.FC<{ size: string }> = ({ size, children }) => {
  return (
    <div style={{ position: 'relative', display: 'block' }}>
      <svg width={size} height={size} version="1.1" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
        <g transform="matrix(1.423 0 0 1.423 89.32 89.617)">
          <path
            d="m49.237 25h-99.985l50.131-86.237z"
            fill="#389138"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="#000"
          />
          <path
            d="m0.61704 61.237-51.365-36.237h99.985z"
            fill="#368c36"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="#000"
          />
          <path
            d="m49.237 25-49.854-86.237 51.365 36.237z"
            fill="#2c742c"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="#000"
          />
          <path
            d="m-0.61704-61.237-50.131 86.237 1.5114-50z"
            fill="#1c4a1c"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="#000"
          />
        </g>
      </svg>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '48%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export { Ability }
