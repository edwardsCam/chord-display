import React from 'react'
import Key, { Props as KeyProps } from 'components/key'
import { Note } from 'types/note'
import { OnSelectKey } from 'types/on-select-key'
import areSameNote from 'util/are-same-note'

type Props = {
  base: number
  onSelect?: OnSelectKey
  complete?: boolean
  notes?: Note[]
}

const Octave: React.FC<Props> = ({
  base: octave,
  complete,
  notes = [],
  onSelect,
}: Props) => {
  const keyProps = (note: Note, white: boolean): KeyProps => ({
    white,
    octave,
    note,
    highlighted: notes.some((n) => areSameNote(note, n)),
    onSelect: (note) => onSelect && onSelect(note),
  })

  const renderC = () => {
    const note: Note = {
      natural: 2,
      accidental: 0,
      octave,
    }
    return <Key {...keyProps(note, true)} />
  }

  const renderCSharp = () => {
    const note: Note = {
      natural: 2,
      accidental: 1,
      octave,
    }
    return <Key {...keyProps(note, false)} />
  }

  const renderD = () => {
    const note: Note = {
      natural: 3,
      accidental: 0,
      octave,
    }
    return <Key {...keyProps(note, true)} />
  }

  const renderDSharp = () => {
    const note: Note = {
      natural: 3,
      accidental: 1,
      octave,
    }
    return <Key {...keyProps(note, false)} />
  }

  const renderE = () => {
    const note: Note = {
      natural: 4,
      accidental: 0,
      octave,
    }
    return <Key {...keyProps(note, true)} />
  }

  const renderF = () => {
    const note: Note = {
      natural: 5,
      accidental: 0,
      octave,
    }
    return <Key {...keyProps(note, true)} />
  }

  const renderFSharp = () => {
    const note: Note = {
      natural: 5,
      accidental: 1,
      octave,
    }
    return <Key {...keyProps(note, false)} />
  }

  const renderG = () => {
    const note: Note = {
      natural: 6,
      accidental: 0,
      octave,
    }
    return <Key {...keyProps(note, true)} />
  }

  const renderGSharp = () => {
    const note: Note = {
      natural: 6,
      accidental: 1,
      octave,
    }
    return <Key {...keyProps(note, false)} />
  }

  const renderA = () => {
    const note: Note = {
      natural: 0,
      accidental: 0,
      octave,
    }
    return <Key {...keyProps(note, true)} />
  }

  const renderASharp = () => {
    const note: Note = {
      natural: 0,
      accidental: 1,
      octave,
    }
    return <Key {...keyProps(note, false)} />
  }

  const renderB = () => {
    const note: Note = {
      natural: 1,
      accidental: 0,
      octave,
    }
    return <Key {...keyProps(note, true)} />
  }

  const renderHighA = () => {
    const note: Note = {
      natural: 0,
      accidental: 0,
      octave: octave + 1,
    }
    return <Key {...keyProps(note, true)} />
  }

  return (
    <>
      {renderA()}
      {renderASharp()}
      {renderB()}
      {renderC()}
      {renderCSharp()}
      {renderD()}
      {renderDSharp()}
      {renderE()}
      {renderF()}
      {renderFSharp()}
      {renderG()}
      {renderGSharp()}
      {complete && renderHighA()}
    </>
  )
}

export default Octave
