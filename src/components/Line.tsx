import { FC } from 'react'
import Square from './Square'

type Props = {
  vertical: number
  colors: string[][]
  handleColorChange: (vertical: number) => (horizontal: number) => void
  squareNum: number
  isOnMouseDown: boolean
  setIsOnMouseDown: React.Dispatch<React.SetStateAction<boolean>>
}
const Line: FC<Props> = ({
  vertical,
  colors,
  handleColorChange,
  squareNum,
  isOnMouseDown,
  setIsOnMouseDown,
}) => {
  return (
    <div className="flex flex-row" style={{}}>
      {[...Array(squareNum).keys()].map((_, index) => (
        <Square
          key={index}
          vertical={vertical}
          horizontal={index}
          colors={colors}
          handleColorChange={handleColorChange(vertical)}
          isOnMouseDown={isOnMouseDown}
          setIsOnMouseDown={setIsOnMouseDown}
        />
      ))}
    </div>
  )
}

export default Line
