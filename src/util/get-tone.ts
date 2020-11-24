import { Tone } from 'types/note'
import getAccidental from './get-accidental'
import normalizeNote from './normalize-note'
import getNatural from './get-natural'

const getTone = (str: string): Tone | null => {
  const natural = getNatural(str[0])
  return natural == null
    ? null
    : normalizeNote({
        natural,
        accidental: getAccidental(str),
      })
}

export default getTone
