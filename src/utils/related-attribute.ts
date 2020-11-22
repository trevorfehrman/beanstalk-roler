/* eslint-disable prettier/prettier */
import { CharLeaf } from 'components/character-sheet/character-sheet.interface'

const skillAttributeMap: { [leaf: string]: string } = {
  brawl: CharLeaf.Brawn,
  gunnery: CharLeaf.Agility,
  melee: CharLeaf.Brawn,
  rangedHeavy: CharLeaf.Agility,
  rangedLight: CharLeaf.Agility,
  athletics: CharLeaf.Brawn,
  compHacking: CharLeaf.Intellect,
  compSysops: CharLeaf.Intellect,
  cool: CharLeaf.Presence,
  coordination: CharLeaf.Agility,
  discipline: CharLeaf.Willpower,
  driving: CharLeaf.Agility,
  mechanics: CharLeaf.Intellect,
  medicine: CharLeaf.Intellect,
  operating: CharLeaf.Intellect,
  perception: CharLeaf.Cunning,
  piloting: CharLeaf.Agility,
  resilience: CharLeaf.Brawn,
  skullduggery: CharLeaf.Cunning,
  stealth: CharLeaf.Agility,
  streetwise: CharLeaf.Cunning,
  survival: CharLeaf.Cunning,
  vigilance: CharLeaf.Willpower,
  charm: CharLeaf.Presence,
  coercion: CharLeaf.Willpower,
  deception: CharLeaf.Cunning,
  leadership: CharLeaf.Presence,
  negotiation: CharLeaf.Presence,
  science: CharLeaf.Intellect,
  society: CharLeaf.Intellect,
  theNet: CharLeaf.Intellect,
}

export function getRelatedAttribute(path: string): string {
  return skillAttributeMap[path]
}
