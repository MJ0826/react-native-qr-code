import React from 'react'
import Surface from './Canvas'

const QRCode = ({
  backgroundColor = 'white',
  color = 'black',
  level = 'L',
  size = 100,
  value = 'Hello World!',
  style = {}
}) => {
  return (
    <Surface
      backgroundColor={backgroundColor}
      color={color}
      level={level}
      size={size}
      value={value}
      style={style}
    />
  )
}

export default QRCode
