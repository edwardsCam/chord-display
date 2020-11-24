import React, { useState } from 'react'
import styled from '@emotion/styled'
import parse from 'util/chord-parser'
import getNoteName from 'util/get-note-name'
import detectChord from 'util/detect-chord'
import areSameNote from 'util/are-same-note'
import { Note } from 'types/note'
import Keyboard from './keyboard'

const Wrapper = styled.div`
  text-align: center;
  padding: 1rem;
`

const Label = styled.label`
  font-size: 2rem;
  margin-left: 1rem;
`

const Input = styled.input`
  height: 42px;
  padding: 8px;
  vertical-align: middle;
  font-size: 2rem;
`

const ChordDetectionLabel = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
`

type Props = {}

const Piano: React.FC<Props> = ({}: Props) => {
  const [typedInput, theyTypedSomething] = useState('')
  const [userSelectedKeys, theyPressedSomething] = useState([] as Note[])
  const [mode, setMode] = useState('enter')
  const chord = parse(typedInput)
  const possibleChords = detectChord(
    userSelectedKeys.map((n) => getNoteName(n))
  )

  const renderInput = () => (
    <Label>
      {'Enter a chord: '}
      <Input
        value={typedInput}
        onChange={(e) => theyTypedSomething(e.target.value)}
      />
    </Label>
  )
  const renderPossibleChords = () => (
    <ChordDetectionLabel>
      {userSelectedKeys.length < 2 &&
        'No chords found, plz to select some notes!'}
      {userSelectedKeys.length >= 2 &&
        !possibleChords.length &&
        ':wat: That chord is too obscure for me'}
      {possibleChords.length === 1 && 'Voila, your chord is:'}
      {possibleChords.length > 1 && 'Possible chords:'}
      {possibleChords.map((chord) => (
        <div key={chord} children={chord} />
      ))}
    </ChordDetectionLabel>
  )
  const onSelectKey = (note: Note) => {
    if (userSelectedKeys.some((key) => areSameNote(key, note))) {
      theyPressedSomething(
        userSelectedKeys.filter((key) => !areSameNote(key, note))
      )
    } else {
      theyPressedSomething([...userSelectedKeys, note])
    }
  }

  return (
    <Wrapper>
      <select
        value={mode}
        onChange={(e) => {
          setMode(e.target.value)
          theyTypedSomething('')
        }}
      >
        <option value="enter">Type a chord</option>
        <option value="detect">Detect a chord</option>
      </select>
      {mode === 'enter' && renderInput()}
      <Keyboard
        onSelect={mode === 'detect' ? onSelectKey : undefined}
        octaves={2}
        displayedChord={mode === 'enter' ? chord : userSelectedKeys}
      />
      {mode === 'detect' && renderPossibleChords()}
    </Wrapper>
  )
}

export default Piano
