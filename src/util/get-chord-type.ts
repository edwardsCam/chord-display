import { ChordType } from '../types/chord-type'
import getAccidental from './get-accidental'

const getChordType = (chordName: string): ChordType | null => {
  let subStrIndex = 1
  const accidental = getAccidental(chordName)
  if (accidental !== 0) {
    subStrIndex++
  }
  const decorations = chordName.substr(subStrIndex)
  if (!decorations) return ChordType.maj

  if (decorations === 'm' || decorations.startsWith('min')) {
    return ChordType.min
  }

  if (decorations.startsWith('dim')) {
    return ChordType.dim
  }

  if (decorations.startsWith('aug')) {
    return ChordType.aug
  }

  return null
}

export default getChordType
