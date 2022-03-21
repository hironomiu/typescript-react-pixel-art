import { FC } from 'react'
type Props = {
  color: string
  colorR: string
  colorG: string
  colorB: string
  setColorRGB: React.Dispatch<React.SetStateAction<string>>
  setColor: React.Dispatch<React.SetStateAction<string>>
}
const InputRange: FC<Props> = ({
  color,
  colorR,
  colorG,
  colorB,
  setColorRGB,
  setColor,
}) => {
  return (
    <>
      <input
        className="appearance-none cursor-pointer outline-none bg-blue-300 rounded h-2 mx-2 w-28"
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
