import React, { FC } from 'react'

type Props = {
  color: string
  setColor: React.Dispatch<React.SetStateAction<string>>
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  squareNum: number
}

const Form: FC<Props> = ({ color, setColor, handleRadioChange, squareNum }) => {
  return (
    <div>
      <div className="flex flex-row items-center">
        {/* <label className="text-lg mx-2">選択</label> */}
        <input
          className="w-96 h-14"
          type="color"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
      </div>

      <div>
        {/* <div
          style={{ backgroundColor: `${color}` }}
          className="h-10 w-96"
        ></div> */}
        <input
          className="w-96"
          type="range"
          min="0"
          // max="255"
          max="16777215"
          value={parseInt(color.slice(1, 7), 16)}
          onChange={(e) => {
            console.log('hex:', Number(e.target.value).toString(16))
            console.log(
              '#' + ('000000' + Number(e.target.value).toString(16)).slice(-6)
            )
            console.log('10 :', parseInt(color.slice(1, 7), 16))
            setColor(
              '#' + ('000000' + Number(e.target.value).toString(16)).slice(-6)
              // +
              // ('00' + Number(e.target.value).toString(16)).slice(-2) +
              // ('00' + Number(e.target.value).toString(16)).slice(-2)
            )
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
