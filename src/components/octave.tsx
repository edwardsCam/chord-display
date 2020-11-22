import React from 'react'
import WhiteKey from 'components/whiteKey'
import BlackKey from 'components/blackKey'

type Props = {
  complete?: boolean
}

const Octave: React.FC<Props> = (props: Props) => {
  return (
    <>
      <WhiteKey />
      <BlackKey />
      <WhiteKey />
      <WhiteKey />
      <BlackKey />
      <WhiteKey />
      <BlackKey />
      <WhiteKey />
      <WhiteKey />
      <BlackKey />
      <WhiteKey />
      <BlackKey />
      {props.complete && <WhiteKey />}
    </>
  )
}

export default Octave
