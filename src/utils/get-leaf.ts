import { ICharacter } from 'interfaces-and-types/character-sheet.interface'

export function getLeaf(path: string, character: ICharacter): string | number | boolean {
  const pathArray = path.split('.')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = pathArray.reduce((path: any, key: any) => {
    return path[key]
  }, character)

  return result
}
