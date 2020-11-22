import { Chord } from '../types/chord'
import getChordType from './get-chord-type'
import getRoot from './get-root'

const getChord = (chordName: string): Chord | null => {
  const root = getRoot(chordName)
  if (root == null) return null

  const type = getChordType(chordName)
  if (type == null) return null

  return {
    root,
    type,
  }
}

export default getChord
