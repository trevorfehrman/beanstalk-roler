import * as React from 'react'

import { Stack } from '@chakra-ui/react'

import { CharLeaf } from './character-sheet.interface'

import { TaggedNumberInput } from 'components/common/tagged-number-input.component'

const Xp: React.FC = () => {
  return (
    <Stack spacing={3}>
      <TaggedNumberInput size="md" title="Availible Xp:" characterLeaf={CharLeaf.XpAvailible} />
      <TaggedNumberInput size="md" title="Total Xp:" characterLeaf={CharLeaf.XpTotal} />
    </Stack>
  )
}

export { Xp }
