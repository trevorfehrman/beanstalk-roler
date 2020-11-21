import * as React from 'react'

import { HStack } from '@chakra-ui/react'

import { CharLeaf, IAttributes, Attributes as Attr } from './character-sheet.interface'

import { TaggedNumberInput } from '../common/tagged-number-input.component'

type AttributesProps = {
  isEdit: boolean
  attributes: IAttributes
}

const Attributes: React.FC<AttributesProps> = ({ isEdit, attributes }) => {
  return (
    <>
      <HStack>
        <TaggedNumberInput title={Attr.Brawn} value={attributes.brawn} characterLeaf={CharLeaf.Brawn} />
        <TaggedNumberInput title={Attr.Agility} value={attributes.agility} characterLeaf={CharLeaf.Agility} />
        <TaggedNumberInput title={Attr.Intellect} value={attributes.intellect} characterLeaf={CharLeaf.Intellect} />
        <TaggedNumberInput title={Attr.Cunning} value={attributes.cunning} characterLeaf={CharLeaf.Cunning} />
        <TaggedNumberInput title={Attr.Willpower} value={attributes.willpower} characterLeaf={CharLeaf.Willpower} />
        <TaggedNumberInput title={Attr.Presence} value={attributes.presence} characterLeaf={CharLeaf.Presence} />
      </HStack>
    </>
  )
}

export { Attributes }
