import { Natural } from './natural'
import { Accidental } from './accidental'

export type Tone = {
  natural: Natural
  accidental: Accidental
}

export type Note = Tone & {
  octave: number
}
