import { Chord } from '../types/chord'
import getChordType from './get-chord-type'
import getRoot from './get-root'

const getChord = (chordName: string): Chord => ({
  root: getRoot(chordName),
  type: getChordType(chordName),
})

export default getChord
