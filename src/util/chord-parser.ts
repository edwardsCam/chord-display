import { Note } from '../types/note'
import getChord from './get-chord'
import getNotes from './get-notes'

const parse = (chordName: string): Set<Note> => {
  const chord = getChord(chordName)
  return getNotes(chord)
}

export default parse
