import { Note } from 'types/note'
import getTone from './get-tone'

const getNotes = (notes: string[]): Note[] => {
  const tones = notes.map((n) => n.toLowerCase()).map((n) => getTone(n)!)
  let octave = 0
  return tones.map((t, i) => {
    if (i > 0) {
      const prev = tones[i - 1]
      if (prev.natural > t.natural) {
        octave++
      }
    }
    return {
      ...t,
      octave,
    }
  })
}

export default getNotes
