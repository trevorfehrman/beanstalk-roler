import * as React from 'react'

const Proficiency: React.FC<{ size: string }> = ({ size, children }) => {
  return (
    <div style={{ position: 'relative' }}>
      <svg width={size} height={size} viewBox="0 0 180 180" version="1.1" id="svg8">
        <g id="layer1">
          <g transform="matrix(0.63871343,0,0,0.63871343,90.226138,89.599772)" id="g1417">
            <path
              fill="#d2b13d"
              stroke="#000"
              strokeWidth="2"
              strokeLinejoin="round"
              d="M 8.00645,-81.0394 87.8957,-21.301 55.6724,73.3545 -44.132,72.1164 -73.5912,-23.3043 Z"
              id="path1405"
            />
            <path
              fill="#796623"
              stroke="#000"
              strokeWidth="2"
              strokeLinejoin="round"
              d="m 3.59844,-136.604 4.40801,55.5646 -81.59765,57.7351 -54.8378,-19.8826 47.7055,-70.0231 z"
              id="path1407"
            />
            <path
              fill="#8d7729"
              stroke="#000"
              strokeWidth="2"
              strokeLinejoin="round"
              d="m -128.429,-43.1869 54.8378,19.8826 29.4592,95.4207 -36.6314,39.0906 -52.0986,-71.2615 z"
              id="path1409"
            />
            <path
              fill="#98802c"
              stroke="#000"
              strokeWidth="2"
              strokeLinejoin="round"
              d="M 8.00645,-81.0394 3.59844,-136.604 80.7634,-111.207 132.862,-39.9455 87.8957,-21.301 Z"
              id="path1411"
            />
            <path
              fill="#c0a237"
              stroke="#000"
              strokeWidth="2"
              strokeLinejoin="round"
              d="M -44.132,72.1164 55.6724,73.3545 80.7235,113.21 -3.59844,136.604 -80.7634,111.207 Z"
              id="path1413"
            />
            <path
              fill="#c9aa3a"
              stroke="#000"
              strokeWidth="2"
              strokeLinejoin="round"
              d="M 87.8957,-21.301 132.862,-39.9455 128.429,43.1869 80.7235,113.21 55.6724,73.3545 Z"
              id="path1415"
            />
          </g>
        </g>
      </svg>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '53%',
          left: '53%',
          transform: 'translateX(-50%) translateY(-50%)',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export { Proficiency }
