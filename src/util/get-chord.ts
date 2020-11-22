import { Chord } from '../types/chord'
import getChordType from './get-chord-type'
import getRoot from './get-root'

const getChord = (chordName: string): Chord | null => {
  const type = getChordType(chordName)
  if (type == null) return null
  return {
    root: getRoot(chordName),
    type,
  }
}

export default getChord
