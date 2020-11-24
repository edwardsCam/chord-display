import React from 'react'
import styled from '@emotion/styled'
import { Note } from 'types/note'
import { OnSelectKey } from 'types/on-select-key'
import Octave from './octave'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

type Props = {
  onSelect?: OnSelectKey
  octaves?: number
  displayedChord?: Note[]
}

const Keyboard: React.FC<Props> = (props: Props) => {
  let octaveComponents: React.ReactNode[] = []
  const octaves = props.octaves || 1
  for (let o = 0; o < octaves; o++) {
    octaveComponents.push(
      <Octave
        key={o}
        base={o}
        complete={o === octaves - 1}
        notes={props.displayedChord}
        onSelect={props.onSelect}
      />
    )
  }
  return <Wrapper>{octaveComponents}</Wrapper>
}

export default Keyboard
