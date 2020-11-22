import React from 'react'
import styled from '@emotion/styled'

type Props = {
  white: boolean
}

const baseKey = `
  border: 2px solid black;
`

const WhiteKey = styled.span`
  ${baseKey}
  width: 50px;
  height: 200px;
  background: white;
`

const BlackKey = styled.span`
  ${baseKey}
  width: 40px;
  height: 100px;
  background: black;
`

const Key: React.FC<Props> = (props: Props) => {
  return props.white ? <WhiteKey /> : <BlackKey />
}

export default Key
