import React, { useState } from 'react'
import styled from '@emotion/styled'
import parse from 'util/chord-parser'
import Octave from './octave'

const PianoWrapper = styled.div`
  display: flex;
`

type Props = {}

const Piano: React.FC<Props> = ({}: Props) => {
  const [userInput, onChange] = useState('')
  const chord = parse(userInput)
  return (
    <div>
      <label>
        chord:{' '}
        <input value={userInput} onChange={(e) => onChange(e.target.value)} />
      </label>
      <PianoWrapper>
        <Octave base={0} notes={chord} />
        <Octave base={1} notes={chord} complete />
      </PianoWrapper>
    </div>
  )
}

export default Piano
