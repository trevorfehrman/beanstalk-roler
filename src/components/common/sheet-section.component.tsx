import * as React from 'react'

import { GridItem } from '@chakra-ui/react'

import { SectionTag } from 'styled-components/section-tag'
import { SectionBox } from 'styled-components/section-box'

type SheetSectionProps = {
  gridRow: string
  gridColumn: string
  title: string
}

const SheetSection: React.FC<SheetSectionProps> = ({ title, children, gridRow, gridColumn }) => {
  return (
    <GridItem gridRow={gridRow} gridColumn={gridColumn}>
      <SectionTag>{title}</SectionTag>
      <SectionBox>{children}</SectionBox>
    </GridItem>
  )
}

export { SheetSection }
