import { Note } from 'types/note'
import areSameTone from './are-same-tone'

const areSameNote = (note1: Note, note2: Note): boolean =>
  areSameTone(note1, note2) && note1.octave === note2.octave

export default areSameNote
