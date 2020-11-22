import { Accidental } from '../types/accidental'

const getAccidental = (chordName: string): Accidental => {
  if (chordName[1] === '#') {
    return 1
  }
  if (chordName[1] === 'b') {
    return -1
  }
  return 0
}

export default getAccidental
