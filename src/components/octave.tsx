import React from 'react'
import Key from 'components/key'
import { Note } from 'types/note'
import areSameNote from 'util/are-same-note'

type Props = {
  base: number
  complete?: boolean
  notes?: Note[]
}

const Octave: React.FC<Props> = ({
  base: octave,
  complete,
  notes = [],
}: Props) => {
  const commonProps = (note: Note) => ({
    octave,
    tone: note,
    highlighted: notes.some((n) => areSameNote(note, n)),
  })

  const renderC = () => {
    const note: Note = {
      natural: 2,
      accidental: 0,
      octave,
    }
    return <Key white {...commonProps(note)} />
  }

  const renderCSharp = () => {
    const note: Note = {
      natural: 2,
      accidental: 1,
      octave,
    }
    return <Key white={false} {...commonProps(note)} />
  }

  const renderD = () => {
    const note: Note = {
      natural: 3,
      accidental: 0,
      octave,
    }
    return <Key white {...commonProps(note)} />
  }

  const renderDSharp = () => {
    const note: Note = {
      natural: 3,
      accidental: 1,
      octave,
    }
    return <Key white={false} {...commonProps(note)} />
  }

  const renderE = () => {
    const note: Note = {
      natural: 4,
      accidental: 0,
      octave,
    }
    return <Key white {...commonProps(note)} />
  }

  const renderF = () => {
    const note: Note = {
      natural: 5,
      accidental: 0,
      octave,
    }
    return <Key white {...commonProps(note)} />
  }

  const renderFSharp = () => {
    const note: Note = {
      natural: 5,
      accidental: 1,
      octave,
    }
    return <Key white={false} {...commonProps(note)} />
  }

  const renderG = () => {
    const note: Note = {
      natural: 6,
      accidental: 0,
      octave,
    }
    return <Key white {...commonProps(note)} />
  }

  const renderGSharp = () => {
    const note: Note = {
      natural: 6,
      accidental: 1,
      octave,
    }
    return <Key white={false} {...commonProps(note)} />
  }

  const renderA = () => {
    const note: Note = {
      natural: 0,
      accidental: 0,
      octave,
    }
    return <Key white {...commonProps(note)} />
  }

  const renderASharp = () => {
    const note: Note = {
      natural: 0,
      accidental: 1,
      octave,
    }
    return <Key white={false} {...commonProps(note)} />
  }

  const renderB = () => {
    const note: Note = {
      natural: 1,
      accidental: 0,
      octave,
    }
    return <Key white {...commonProps(note)} />
  }

  const renderHighA = () => {
    const note: Note = {
      natural: 0,
      accidental: 0,
      octave: octave + 1,
    }
    return <Key white {...commonProps(note)} />
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
