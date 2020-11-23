import { Natural } from '../types/natural'
import { Tone } from '../types/note'

const prettyPrint = (tone: Tone): string => {
  let accidental = ''
  if (tone.accidental === 1) {
    accidental = '#'
  } else if (tone.accidental === -1) {
    accidental = '(b)'
  }
  return Natural[tone.natural] + accidental + ' '
}

export default prettyPrint
