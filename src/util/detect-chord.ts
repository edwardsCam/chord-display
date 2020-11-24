import TonalChord from '@tonaljs/chord'

const detectChord = (notes: string[] = []): string[] => {
  if (!notes.length) return []

  return TonalChord.detect(notes)
}

export default detectChord
