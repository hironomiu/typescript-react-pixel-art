import { useState } from 'react'
import Board from './Board'
import Form from './Form'

const defaultColors = [...Array(8).keys()].map((num) =>
  [...Array(8).keys()].map((num) => '#ffffff')
)

const Main = () => {
  const [color, setColor] = useState<string>('#81599b')
  const [colors, setColors] = useState<string[][]>(defaultColors)
  const [squareNum, setSquareNum] = useState(8)
  const [isOnMouseDown, setIsOnMouseDown] = useState<boolean>(false)

  const handleColorChange = (vertical: number) => (horizontal: number) => {
    const colors2 = [...colors]
    colors2[vertical][horizontal] = color
    setColors(colors2)
  }
  // TODO 型
  const handleRadioChange = (e: any) => {
    setSquareNum(Number(e.target.value))
    setColors(
      [...Array(Number(e.target.value)).keys()].map(() =>
        [...Array(Number(e.target.value)).keys()].map(() => '#ffffff')
      )
    )
  }
  return (
    <div className="text-2xl flex flex-col justify-center items-center ">
      <h1 className="my-4">Pixel Art App</h1>

      <div className="h-80">
        <Board
          colors={colors}
          handleColorChange={handleColorChange}
          squareNum={squareNum}
          isOnMouseDown={isOnMouseDown}
          setIsOnMouseDown={setIsOnMouseDown}
        />
      </div>
      <Form
        color={color}
        setColor={setColor}
        handleRadioChange={handleRadioChange}
        squareNum={squareNum}
      />
    </div>
  )
}

export default Main
