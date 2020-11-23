import { Tone, Note } from 'types/note'
import { increment } from './increment'
import normalizeNote from './normalize-note'

const _memo: {
  [natural: number]: {
    [accidental: number]: number
  }
} = {}

const getMemo = (tone: Tone): number | null => {
  if (_memo[tone.natural] && _memo[tone.natural][tone.accidental]) {
    return _memo[tone.natural][tone.accidental]
  }
  return null
}

const getToneValue = (tone: Tone): number => {
  const note = normalizeNote(tone)

  const memoized = getMemo(note)
  if (memoized != null) {
    return memoized
  }

  let result: number = 0
  const base: Note = {
    natural: 0,
    accidental: 0,
    octave: 0,
  }
  let tmp = base

  while (tmp.natural !== note.natural || tmp.accidental !== note.accidental) {
    tmp = increment(base, ++result)
  }

  if (!_memo[note.natural]) _memo[note.natural] = {}
  _memo[note.natural][note.accidental] = result
  return result
}

export default getToneValue
