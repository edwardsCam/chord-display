import TonalChord from '@tonaljs/chord'
import { Note } from 'types/note'
import getNotes from './get-notes'

const parse = (chordName: string): Note[] => {
  if (!chordName) return []

  const chord = TonalChord.get(chordName)
  return getNotes(chord.notes)
}

export default parse
