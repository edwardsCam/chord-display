import React, { useState } from 'react'
import styled from '@emotion/styled'
import parse from 'util/chord-parser'
import Octave from './octave'

const Wrapper = styled.div`
  text-align: center;
  padding: 1rem;
`

const Label = styled.label`
  font-size: 2rem;
`

const Input = styled.input`
  height: 42px;
  padding: 8px;
  vertical-align: middle;
  font-size: 2rem;
`

const Keyboard = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

type Props = {}

const Piano: React.FC<Props> = ({}: Props) => {
  const [userInput, onChange] = useState('')
  const chord = parse(userInput)
  return (
    <Wrapper>
      <Label>
        {'Enter a chord: '}
        <Input value={userInput} onChange={(e) => onChange(e.target.value)} />
      </Label>
      <Keyboard>
        <Octave base={0} notes={chord} />
        <Octave base={1} notes={chord} complete />
      </Keyboard>
    </Wrapper>
  )
}

export default Piano
