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
      {' '}
      <label className="text-xl my-4">選択</label>
      <input
        type="color"
        onChange={(e) => setColor(e.target.value)}
        value={color}
      />
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
