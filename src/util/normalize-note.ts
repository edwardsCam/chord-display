import { Note } from 'types/note'
import { increment, decrement } from './increment'

const normalizeNote = (note: Note): Note => {
  if (note.accidental === 0) return note

  if (note.accidental === 1) {
    if ([1, 4].includes(note.natural)) {
      return {
        natural: note.natural + 1,
        accidental: 0,
      }
    }
    return note
  }

  const pureNatural: Note = {
    natural: note.natural,
    accidental: 0,
  }
  if (note.accidental < 0) {
    const decremented = decrement(pureNatural, Math.abs(note.accidental))
    if (decremented.accidental < 0) {
      if ([0, 1, 3, 4, 6].includes(decremented.natural)) {
        let natural = decremented.natural - 1
        if (natural < 0) natural += 7
        return {
          natural,
          accidental: 1,
        }
      }
    }
    return decremented
  } else {
    return increment(pureNatural, note.accidental)
  }
}

export default normalizeNote
