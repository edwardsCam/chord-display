import { Accidental } from '../types/accidental'

const getAccidental = (chordName: string): Accidental => {
  if (chordName[1] === '#') {
    return 1
  }
  if (chordName[1] === '(' && chordName[2] === 'b' && chordName[3] === ')') {
    return -1
  }
  return 0
}

export default getAccidental
