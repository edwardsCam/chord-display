import { Chord } from '../types/chord'
import { ChordType } from '../types/chord-type'
import { Note } from '../types/note'
import increment from './increment'

const getNotes = (chord: Chord): Set<Note> => {
  const { root, type } = chord
  const step = (n: number) => increment(root, n)
  const result = new Set<Note>()
  result.add(root)
  switch (type) {
    case ChordType.maj: {
      result.add(step(4))
      result.add(step(7))
      break
    }
    case ChordType.min: {
      result.add(step(3))
      result.add(step(7))
      break
    }
    case ChordType.dim: {
      result.add(step(3))
      result.add(step(6))
      break
    }
    case ChordType.aug: {
      result.add(step(4))
      result.add(step(8))
      break
    }
  }
  return result
}

export default getNotes
