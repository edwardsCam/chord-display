import increment from '../increment'
import { Note } from '../../types/note'
import { Natural } from '../../types/natural'
import { Accidental } from '../../types/accidental'

const a: Note = {
  natural: 0,
  accidental: 0,
}
const aSharp: Note = {
  natural: 0,
  accidental: 1,
}
const aFlat: Note = {
  natural: 0,
  accidental: -1,
}

const c: Note = {
  natural: 2,
  accidental: 0,
}

describe('util::increment', function () {
  it('returns the note itself if you increment by 0', function () {
    expect(increment(a, 0)).toEqual(a)
    expect(increment(aSharp, 0)).toEqual(aSharp)
    expect(increment(aFlat, 0)).toEqual(aFlat)
    expect(increment(c, 0)).toEqual(c)
  })

  describe('positive increments', function () {})

  describe('negative increments', function () {})
})
