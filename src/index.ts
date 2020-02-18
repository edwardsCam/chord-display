import parse from './util/chord-parser'
import prettyPrint from './util/pretty-print'
import { Note } from './types/note'

const printChord = (chord: Set<Note>) =>
  [...chord].map(prettyPrint).join('\r\n')

const chords = []

chords.forEach((chord: Set<Note>) => {
  const el = document.createElement('div')
  el.innerHTML = printChord(chord)
  document.body.appendChild(el)
})
