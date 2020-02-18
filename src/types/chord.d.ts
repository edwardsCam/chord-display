import { Note } from './note'
import { ChordType } from './chord-type'

export type Chord = {
  root: Note
  type: ChordType
}
