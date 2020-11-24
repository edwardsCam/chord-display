import { Natural } from './natural'

export type Tone = {
  natural: Natural
  accidental: number
}

export type Note = Tone & {
  octave: number
}
