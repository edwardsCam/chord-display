import React from 'react'
import parse from './util/chord-parser'
import prettyPrint from './util/pretty-print'
import { Note } from './types/note'
import Piano from 'components/piano'

const printChord = (chord: Set<Note>) =>
  [...chord].map(prettyPrint).join('\r\n')

const chords = [parse('c')]

const App = () => {
  return (
    <div>
      {/* {chords.map((chord) => {
        const pretty = printChord(chord)
        return <div key={pretty}>{pretty}</div>
      })} */}
      <Piano />
    </div>
  )
}

export default App
