import React from 'react'
import parse from './util/chord-parser'
import prettyPrint from './util/pretty-print'
import { Note } from './types/note'

const printChord = (chord: Set<Note>) =>
  [...chord].map(prettyPrint).join('\r\n')

const chords = [parse('c')]

const App = () => {
  return (
    <div>
      {chords.map((chord) => (
        <div>{printChord(chord)}</div>
      ))}
    </div>
  )
}

export default App
