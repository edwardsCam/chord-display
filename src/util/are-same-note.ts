import { Note } from 'types/note'
import getNoteValue from './get-note-value'

const areSameNote = (note1: Note, note2: Note): boolean => {
  return getNoteValue(note1) === getNoteValue(note2)
}

export default areSameNote
