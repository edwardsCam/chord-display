import React from 'react'
import styled from '@emotion/styled'
import { Note } from 'types/note'
import prettyPrint from 'util/pretty-print'

export type CommonProps = {
  highlighted?: boolean
  showNote?: boolean
  octave: number
  note: Note
}

type Props = CommonProps & {
  white: boolean
}

const HIGHLIGHTED_COLOR = 'green'

const baseKey = `
  border: 2px solid black;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const WhiteWrapper = styled.div``
const BlackWrapper = styled.div`
  position: relative;
`

const Key: React.FC<Props> = ({
  highlighted,
  note,
  white,
  showNote = true,
}: Props) => {
  const getBackgroundColor = (): string => {
    if (highlighted) return HIGHLIGHTED_COLOR
    return white ? 'white' : 'black'
  }

  const getContent = () => {
    const parsedNote = prettyPrint(note)
    if (white) {
      const WhiteKey = styled.span`
        ${baseKey};
        width: 50px;
        height: 200px;
        background: ${getBackgroundColor()};
        color: black;
      `
      return <WhiteKey>{showNote && parsedNote}</WhiteKey>
    } else {
      const BlackKey = styled.div`
        ${baseKey};
        width: 30px;
        height: 120px;
        background: ${getBackgroundColor()};
        color: white;
        position: absolute;
        left: -16px;
      `
      return <BlackKey>{showNote && parsedNote}</BlackKey>
    }
  }

  const Component = white ? WhiteWrapper : BlackWrapper
  return <Component>{getContent()}</Component>
}

export default Key
