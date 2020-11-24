import { Note } from '../types/note'
import getTone from './get-tone'

import TonalChord from '@tonaljs/chord'

const parse = (chordName: string): Note[] => {
  if (!chordName) return []

  const chord = TonalChord.get(chordName)
  const tones = chord.notes.map((n) => n.toLowerCase()).map((n) => getTone(n)!)
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

export default parse
