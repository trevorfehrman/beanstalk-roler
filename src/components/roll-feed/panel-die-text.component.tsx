import * as React from 'react'
import { motion } from 'framer-motion'

import { Text } from '@chakra-ui/react'

const MotionText = motion.custom(Text)

const PanelDieText: React.FC<{ value: number }> = value => {
  console.log(value)
  const { value: myValue } = value
  return (
    <MotionText
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.2,
      }}
      color="#ececec"
    >
      {myValue}
    </MotionText>
  )
}

export { PanelDieText }
