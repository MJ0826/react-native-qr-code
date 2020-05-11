import React from 'react'
import { Surface, Shape, Transform } from '@react-native-community/art'
import QRCodeImpl from 'qr.js/lib/QRCode'
import ErrorCorrectLevel from 'qr.js/lib/ErrorCorrectLevel'

const Canvas = ({
  size,
  style,
  backgroundColor,
  color,
  level,
  value
}) => {
  const renderSurfaceModules = () => {
    const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level])
    qrcode.addData(value)
    qrcode.make()
    const modules = qrcode.modules
    const tileSize = size / modules.length

    return modules.map((row, rowIndex) =>
      row.map((module, moduleIndex) => {
        const fill = module ? color : backgroundColor
        const itemWidth =
          Math.ceil((moduleIndex + 1) * tileSize) -
          Math.floor(moduleIndex * tileSize)
        const itemHeight =
          Math.ceil((rowIndex + 1) * tileSize) -
          Math.floor(rowIndex * tileSize)
        const d = `M 0 0 L ${itemWidth} 0 L ${itemWidth} ${itemHeight} L 0 ${itemHeight} Z`
        const transformX = Math.round(moduleIndex * tileSize)
        const transformY = Math.round(rowIndex * tileSize)
        return (
          <Shape
            key={moduleIndex}
            d={d}
            fill={fill}
            transform={new Transform().translate(transformX, transformY)}
          />
        )
      })
    )
  }

  return (
    <Surface height={size} style={style} width={size}>
      {renderSurfaceModules()}
    </Surface>
  )
}

export default Canvas
