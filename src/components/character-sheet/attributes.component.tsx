import * as React from 'react'

import { HStack } from '@chakra-ui/react'

import { CharLeaf, Attributes as Attr } from './character-sheet.interface'

import { TaggedNumberInput } from '../common/tagged-number-input.component'

const Attributes: React.FC = () => {
  return (
    <>
      <HStack>
        <TaggedNumberInput title={Attr.Brawn} characterLeaf={CharLeaf.Brawn} />
        <TaggedNumberInput title={Attr.Agility} characterLeaf={CharLeaf.Agility} />
        <TaggedNumberInput title={Attr.Intellect} characterLeaf={CharLeaf.Intellect} />
        <TaggedNumberInput title={Attr.Cunning} characterLeaf={CharLeaf.Cunning} />
        <TaggedNumberInput title={Attr.Willpower} characterLeaf={CharLeaf.Willpower} />
        <TaggedNumberInput title={Attr.Presence} characterLeaf={CharLeaf.Presence} />
      </HStack>
    </>
  )
}

export { Attributes }
