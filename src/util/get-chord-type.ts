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

  if (decorations === 'm' || decorations === 'min') {
    return ChordType.min
  }

  if (decorations === 'dim') {
    return ChordType.dim
  }

  if (decorations === 'aug') {
    return ChordType.aug
  }

  if (decorations === '7') {
    return ChordType.dominant7
  }

  if (decorations === 'm7' || decorations === 'min7') {
    return ChordType.minor7
  }

  if (decorations === 'maj7') {
    return ChordType.major7
  }

  return null
}

export default getChordType
