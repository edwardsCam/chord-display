import { Note } from '../types/note'
import getChord from './get-chord'
import getNotes from './get-notes'

const parse = (chordName: string): Note[] => {
  if (!chordName) return []
  const chord = getChord(chordName)
  return chord ? getNotes(chord) : []
}

export default parse
