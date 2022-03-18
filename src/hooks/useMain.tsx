import { useState } from 'react'

const defaultColors = [...Array(8).keys()].map((num) =>
  [...Array(8).keys()].map(() => '#ffffff')
)

export const useMain = () => {
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

  return {
    color,
    setColor,
    colors,
    setColors,
    squareNum,
    setSquareNum,
    isOnMouseDown,
    setIsOnMouseDown,
    handleColorChange,
    handleRadioChange,
  }
}
