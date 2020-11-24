import { Note } from 'types/note'
import { getNaturalName } from './get-natural'

const getNoteName = (note: Note): string => {
  const natural = getNaturalName(note.natural)
  if (note.accidental === 0) return natural

  let accidentals: string[] = []
  if (note.accidental > 0) {
    for (let i = 0; i < note.accidental; i++) {
      accidentals.push('#')
    }
  } else {
    for (let i = 0; i < Math.abs(note.accidental); i++) {
      accidentals.push('b')
    }
  }
  return natural + accidentals.join('')
}

export default getNoteName
