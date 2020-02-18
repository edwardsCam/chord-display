import { Note } from '../types/note'
import { Natural } from '../types/natural'
import getAccidental from './get-accidental'

const getNatural = (n: string): Natural => {
  switch (n) {
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
}

const getRoot = (chordName: string): Note => ({
  natural: getNatural(chordName[0]),
  accidental: getAccidental(chordName),
})

export default getRoot
