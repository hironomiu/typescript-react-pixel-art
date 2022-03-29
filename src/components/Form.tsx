import React, { FC, useState } from 'react'
import InputRange from './parts/InputRange'

type Props = {
  color: string
  setColor: React.Dispatch<React.SetStateAction<string>>
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  squareNum: number
}

const Form: FC<Props> = ({ color, setColor, handleRadioChange, squareNum }) => {
  const [colorR, setColorR] = useState('81')
  const [colorG, setColorG] = useState('59')
  const [colorB, setColorB] = useState('9b')

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row items-center">
        <input
          className="w-96 h-14"
          type="color"
          onChange={(e) => {
            setColor(e.target.value)
            setColorR(e.target.value.slice(1, 3))
            setColorG(e.target.value.slice(3, 5))
            setColorB(e.target.value.slice(5, 7))
          }}
          value={color}
        />
      </div>

      <div className="flex">
        <div className="flex flex-col items-center">
          <label data-testid="label-r">R</label>
          <InputRange
            color={colorR}
            colorR={colorR}
            colorG={colorG}
            colorB={colorB}
            setColorRGB={setColorR}
            setColor={setColor}
          />
        </div>
        <div className="flex flex-col items-center">
          <label data-testid="label-g">G</label>
          <InputRange
            color={colorG}
            colorR={colorR}
            colorG={colorG}
            colorB={colorB}
            setColorRGB={setColorG}
            setColor={setColor}
          />
        </div>
        <div className="flex flex-col items-center">
          <label data-testid="label-b">B</label>
          <InputRange
            color={colorB}
            colorR={colorR}
            colorG={colorG}
            colorB={colorB}
            setColorRGB={setColorB}
            setColor={setColor}
          />
        </div>
      </div>
      <div className="flex justify-center my-4">
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
