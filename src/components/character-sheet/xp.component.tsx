import * as React from 'react'

import { Stack } from '@chakra-ui/react'

import { CharLeaf, IXp } from './character-sheet.interface'

import { TaggedNumberInput } from 'components/common/tagged-number-input.component'

type XpProps = {
  xp: IXp
}

const Xp: React.FC<XpProps> = ({ xp }) => {
  return (
    <Stack spacing={3}>
      <TaggedNumberInput size="md" title="Availible Xp:" characterLeaf={CharLeaf.XpAvailible} value={xp.availibleXp} />
      <TaggedNumberInput size="md" title="Total Xp:" characterLeaf={CharLeaf.XpTotal} value={xp.totalXp} />
    </Stack>
  )
}

export { Xp }
