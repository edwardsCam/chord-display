import React from 'react'
import styled from '@emotion/styled'
import Octave from './octave'

const PianoWrapper = styled.div`
  display: flex;
`

type Props = {}

const Piano: React.FC<Props> = ({}: Props) => {
  return (
    <PianoWrapper>
      <Octave complete />
    </PianoWrapper>
  )
}

export default Piano
