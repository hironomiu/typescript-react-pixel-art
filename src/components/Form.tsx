import React, { FC, useState } from 'react'

type Props = {
  color: string
  setColor: React.Dispatch<React.SetStateAction<string>>
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  squareNum: number
}

const Form: FC<Props> = ({ color, setColor, handleRadioChange, squareNum }) => {
  const [color1, setColor1] = useState('81')
  const [color2, setColor2] = useState('59')
  const [color3, setColor3] = useState('9b')

  return (
    <div>
      <div className="flex flex-row items-center">
        {/* <label className="text-lg mx-2">選択</label> */}
        <input
          className="w-96 h-14"
          type="color"
          onChange={(e) => {
            setColor(e.target.value)
            setColor1(e.target.value.slice(1, 3))
            setColor2(e.target.value.slice(3, 5))
            setColor3(e.target.value.slice(5, 7))
          }}
          value={color}
        />
      </div>

      <div>
        {/* <div
          style={{ backgroundColor: `${color}` }}
          className="h-10 w-96"
        ></div> */}
        <input
          className=""
          type="range"
          min="0"
          max="255"
          // max="16777215"
          value={parseInt(color1, 16)}
          onChange={(e) => {
            console.log('hex:', Number(e.target.value).toString(16))
            console.log(('00' + Number(e.target.value).toString(16)).slice(-2))
            console.log('color1 10 :', parseInt(color1, 16))
            setColor1(
              ('00' + Number(e.target.value).toString(16)).slice(-2)
              // +
              // ('00' + Number(e.target.value).toString(16)).slice(-2) +
              // ('00' + Number(e.target.value).toString(16)).slice(-2)
            )
            setColor(`#${color1}${color2}${color3}`)
          }}
        />
        <input
          className=""
          type="range"
          min="0"
          max="255"
          // max="16777215"
          value={parseInt(color2, 16)}
          onChange={(e) => {
            console.log('color2 10 :', parseInt(color2, 16))
            setColor2(
              ('00' + Number(e.target.value).toString(16)).slice(-2)
              // +
              // ('00' + Number(e.target.value).toString(16)).slice(-2) +
              // ('00' + Number(e.target.value).toString(16)).slice(-2)
            )
            setColor(`#${color1}${color2}${color3}`)
          }}
        />
        <input
          className=""
          type="range"
          min="0"
          max="255"
          // max="16777215"
          value={parseInt(color3, 16)}
          onChange={(e) => {
            console.log('color3 10 :', parseInt(color3, 16))
            setColor3(
              ('00' + Number(e.target.value).toString(16)).slice(-2)
              // +
              // ('00' + Number(e.target.value).toString(16)).slice(-2) +
              // ('00' + Number(e.target.value).toString(16)).slice(-2)
            )
            setColor(`#${color1}${color2}${color3}`)
          }}
        />
      </div>
      <div>
        <label className="text-xl">
          <input
            type="radio"
            className="mx-2"
            value={8}
            onChange={handleRadioChange}
            checked={squareNum === 8}
          />
          8 x 8
        </label>
        <label className="text-xl">
          <input
            type="radio"
            className="mx-2"
            value={16}
            onChange={handleRadioChange}
            checked={squareNum === 16}
          />
          16 x 16
        </label>
      </div>
    </div>
  )
}

export default Form
