import { Natural } from '../types/natural'
import { Note } from '../types/note'

const prettyPrint = (note: Note): string => {
  let accidental = ''
  if (note.accidental === 1) {
    accidental = '#'
  } else if (note.accidental === -1) {
    accidental = '(b)'
  }
  return Natural[note.natural] + accidental + ' '
}

export default prettyPrint
