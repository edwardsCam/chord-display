import getAccidental from '../get-accidental'

describe('util::getAccidental', function () {
  it('returns 1 if the second char is #', function () {
    expect(getAccidental('a#')).toBe(1)
    expect(getAccidental('b#')).toBe(1)
    expect(getAccidental('c#')).toBe(1)
    expect(getAccidental('d#')).toBe(1)
    expect(getAccidental('e#')).toBe(1)
    expect(getAccidental('f#')).toBe(1)
    expect(getAccidental('g#')).toBe(1)

    expect(getAccidental('c#min')).toBe(1)
    expect(getAccidental('c#maj')).toBe(1)
    expect(getAccidental('c#dim')).toBe(1)
    expect(getAccidental('c#aug')).toBe(1)
  })

  it('returns -1 if it has b after the first char', function () {
    expect(getAccidental('ab')).toBe(-1)
    expect(getAccidental('bb')).toBe(-1)
    expect(getAccidental('cb')).toBe(-1)
    expect(getAccidental('db')).toBe(-1)
    expect(getAccidental('eb')).toBe(-1)
    expect(getAccidental('fb')).toBe(-1)
    expect(getAccidental('gb')).toBe(-1)

    expect(getAccidental('cbmin')).toBe(-1)
    expect(getAccidental('cbmaj')).toBe(-1)
    expect(getAccidental('cbdim')).toBe(-1)
    expect(getAccidental('cbaug')).toBe(-1)
  })

  it('returns 0 if there are no accidentals', function () {
    expect(getAccidental('a')).toBe(0)
    expect(getAccidental('b')).toBe(0)
    expect(getAccidental('c')).toBe(0)
    expect(getAccidental('d')).toBe(0)
    expect(getAccidental('e')).toBe(0)
    expect(getAccidental('f')).toBe(0)
    expect(getAccidental('g')).toBe(0)

    expect(getAccidental('cmin')).toBe(0)
    expect(getAccidental('cdim')).toBe(0)
    expect(getAccidental('caug')).toBe(0)
  })
})
