import Line from './Line'

// TODO 型
const Board = ({
  colors,
  handleColorChange,
  squareNum,
  isOnMouseDown,
  setIsOnMouseDown,
}: any) => {
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
