import { Tone } from '../types/note'
import { Natural } from '../types/natural'
import getAccidental from './get-accidental'
import normalizeNote from './normalize-note'

const getNatural = (n: string): Natural | null => {
  switch (n.toLowerCase()) {
    case 'a':
      return Natural.a
    case 'b':
      return Natural.b
    case 'c':
      return Natural.c
    case 'd':
      return Natural.d
    case 'e':
      return Natural.e
    case 'f':
      return Natural.f
    case 'g':
      return Natural.g
  }
  return null
}

const getRoot = (chordName: string): Tone | null => {
  const natural = getNatural(chordName[0])
  return natural == null
    ? null
    : normalizeNote({
        natural,
        accidental: getAccidental(chordName),
      })
}

export default getRoot
