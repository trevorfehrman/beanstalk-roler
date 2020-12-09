import * as React from 'react'

import { HStack } from '@chakra-ui/react'

import { CharLeaf, Attributes as Attr } from '../../interfaces-and-types/character-sheet.interface'

import { TaggedNumberInput } from '../common/tagged-number-input.component'

const Attributes: React.FC = () => {
  return (
    <>
      <HStack>
        <TaggedNumberInput max={5} title={Attr.Brawn} characterLeaf={CharLeaf.Brawn} />
        <TaggedNumberInput max={5} title={Attr.Agility} characterLeaf={CharLeaf.Agility} />
        <TaggedNumberInput max={5} title={Attr.Intellect} characterLeaf={CharLeaf.Intellect} />
        <TaggedNumberInput max={5} title={Attr.Cunning} characterLeaf={CharLeaf.Cunning} />
        <TaggedNumberInput max={5} title={Attr.Willpower} characterLeaf={CharLeaf.Willpower} />
        <TaggedNumberInput max={5} title={Attr.Presence} characterLeaf={CharLeaf.Presence} />
      </HStack>
    </>
  )
}

export { Attributes }
