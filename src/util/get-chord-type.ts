import { ChordType } from '../types/chord-type'
import getAccidental from './get-accidental'

const getChordType = (chordName: string): ChordType => {
  let subStrIndex = 1
  const accidental = getAccidental(chordName)
  if (accidental !== 0) {
    subStrIndex++
  }
  const decorations = chordName.substr(subStrIndex)

  if (decorations.startsWith('min')) {
    return ChordType.min
  }

  if (decorations.startsWith('dim')) {
    return ChordType.dim
  }

  if (decorations.startsWith('aug')) {
    return ChordType.aug
  }

  return ChordType.maj
}

export default getChordType
