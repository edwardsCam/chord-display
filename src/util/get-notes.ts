import { Chord } from '../types/chord'
import { ChordType } from '../types/chord-type'
import { Note } from '../types/note'
import { increment } from './increment'

const getNotes = (chord: Chord): Note[] => {
  const { root, type } = chord
  const step = (n: number) => increment(root, n)
  const result: Note[] = []
  result.push(root)
  switch (type) {
    case ChordType.maj: {
      result.push(step(4))
      result.push(step(7))
      break
    }
    case ChordType.min: {
      result.push(step(3))
      result.push(step(7))
      break
    }
    case ChordType.dim: {
      result.push(step(3))
      result.push(step(6))
      break
    }
    case ChordType.aug: {
      result.push(step(4))
      result.push(step(8))
      break
    }
  }
  return result
}

export default getNotes
