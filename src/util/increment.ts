import { Note } from '../types/note'
import { Natural } from '../types/natural'
import { Accidental } from '../types/accidental'

const increment = (note: Note, n: number): Note => {
  let newNatural: Natural = note.natural
  let newAccidental = note.accidental
  let counter = n

  while (counter > 0) {
    newAccidental++
    if (
      newAccidental === 1 &&
      (newNatural === Natural.b || newNatural === Natural.e)
    ) {
      // B or E
      incrementWholeStep()
    } else if (newAccidental > 1) {
      incrementWholeStep()
    }
    counter--
  }

  return {
    natural: newNatural,
    accidental: newAccidental as Accidental,
  }

  function incrementWholeStep() {
    newAccidental = 0
    newNatural++
    while (newNatural > Natural.g) newNatural -= 7
  }
}

export default increment
