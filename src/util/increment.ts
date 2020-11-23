import { Note } from '../types/note'
import { Natural } from '../types/natural'
import { Accidental } from '../types/accidental'

export const increment = (note: Note, n: number): Note => {
  let newNatural: Natural = note.natural
  let newAccidental = note.accidental
  let newOctave = note.octave
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
    octave: newOctave,
  }

  function incrementWholeStep() {
    newAccidental = 0
    newNatural++
    while (newNatural > Natural.g) {
      newNatural -= 7
      newOctave++
    }
  }
}

export const decrement = (note: Note, n: number): Note => {
  let newNatural: Natural = note.natural
  let newAccidental = note.accidental
  let newOctave = note.octave
  let counter = n

  while (counter > 0) {
    newAccidental--
    if (newAccidental === -1) {
      if (newNatural === Natural.c || newNatural === Natural.f) {
        decrementWholeStep()
      }
    } else if (newAccidental < 1) {
      decrementWholeStep()
    }
    counter--
  }

  return {
    natural: newNatural,
    accidental: newAccidental as Accidental,
    octave: newOctave,
  }

  function decrementWholeStep() {
    newAccidental = 0
    newNatural--
    while (newNatural < Natural.a) {
      newNatural += 7
      newOctave--
    }
  }
}
