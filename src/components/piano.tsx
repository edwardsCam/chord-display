import React from 'react'
import styled from '@emotion/styled'
import parse from 'util/chord-parser'
import Octave from './octave'

const PianoWrapper = styled.div`
  display: flex;
`

type Props = {}

const Piano: React.FC<Props> = ({}: Props) => {
  const chord = undefined // parse('c')
  return (
    <PianoWrapper>
      <Octave base={0} notes={chord} />
      <Octave base={1} complete />
    </PianoWrapper>
  )
}

export default Piano
