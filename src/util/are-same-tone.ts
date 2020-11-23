import { Tone } from 'types/note'
import getToneValue from './get-tone-value'

const areSameTone = (tone1: Tone, tone2: Tone): boolean =>
  getToneValue(tone1) === getToneValue(tone2)

export default areSameTone
