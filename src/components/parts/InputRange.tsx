import React from 'react'

const InputRange = ({
  color,
  colorR,
  colorG,
  colorB,
  setColorRGB,
  setColor,
}: any) => {
  return (
    <>
      <input
        className="cursor-pointer outline-none"
        type="range"
        min="0"
        max="255"
        value={parseInt(color, 16)}
        onChange={(e) => {
          console.log('color1 10 :', parseInt(colorR, 16))
          setColorRGB(('00' + Number(e.target.value).toString(16)).slice(-2))
          setColor(
            (_color: string) => (_color = `#${colorR}${colorG}${colorB}`)
          )
        }}
      />
    </>
  )
}

export default InputRange
