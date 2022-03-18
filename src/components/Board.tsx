import { FC } from 'react'
import Line from './Line'

type Props = {
  colors: string[][]
  handleColorChange: (vertical: number) => (horizontal: number) => void
  squareNum: number
  isOnMouseDown: boolean
  setIsOnMouseDown: React.Dispatch<React.SetStateAction<boolean>>
}

const Board: FC<Props> = ({
  colors,
  handleColorChange,
  squareNum,
  isOnMouseDown,
  setIsOnMouseDown,
}) => {
  return (
    <div className="flex flex-col border-t-[1px] border-l-[1px] border-solid border-black">
      {[...Array(squareNum).keys()].map((_, index) => {
        return (
          <Line
            key={index}
            vertical={index}
            colors={colors}
            handleColorChange={handleColorChange}
            squareNum={squareNum}
            isOnMouseDown={isOnMouseDown}
            setIsOnMouseDown={setIsOnMouseDown}
          />
        )
      })}
    </div>
  )
}

export default Board
