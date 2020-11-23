import { Note, Tone } from 'types/note'
import { increment, decrement } from './increment'

const normalizeNote = (tone: Tone): Tone => {
  if (tone.accidental === 0) return tone

  if (tone.accidental === 1) {
    if ([1, 4].includes(tone.natural)) {
      return {
        natural: tone.natural + 1,
        accidental: 0,
      }
    }
    return tone
  }

  const pureNatural: Note = {
    natural: tone.natural,
    accidental: 0,
    octave: 0,
  }
  if (tone.accidental < 0) {
    const decremented = decrement(pureNatural, Math.abs(tone.accidental))
    if (decremented.accidental < 0) {
      if ([0, 1, 3, 4, 6].includes(decremented.natural)) {
        let natural = decremented.natural - 1
        if (natural < 0) {
          natural += 7
        }
        return {
          natural,
          accidental: 1,
        }
      }
    }
    return decremented
  } else {
    return increment(pureNatural, tone.accidental)
  }
}

export default normalizeNote
