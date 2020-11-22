import { Note } from 'types/note'

const areSameNote = (note1: Note, note2: Note): boolean => {
  if (note1.accidental === note2.accidental && note1.natural === note2.natural)
    return true
  // TODO be smarter about matching notes
  return false
}

export default areSameNote
