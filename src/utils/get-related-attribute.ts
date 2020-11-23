/* eslint-disable prettier/prettier */
import { skillAttributeMap } from 'constants/skill-attribute-map.constant'

export function getRelatedAttribute(path: string): string {
  return skillAttributeMap[path]
}
