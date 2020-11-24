const getAccidental = (chordName: string): number => {
  if (chordName[1] === '#') {
    if (chordName[2] === '#') {
      if (chordName[3] === '#') {
        return 3
      }
      return 2
    }
    return 1
  }
  if (chordName[1] === 'b') {
    if (chordName[2] === 'b') {
      if (chordName[3] === 'b') {
        return -3
      }
      return -2
    }
    return -1
  }
  return 0
}

export default getAccidental
