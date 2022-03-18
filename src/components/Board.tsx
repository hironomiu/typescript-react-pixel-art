import Line from './Line'

const Board = ({ colors, handleColorChange, squareNum }: any) => {
  return (
    <div
      className="flex flex-col border-t-[1px] border-l-[1px] border-solid border-black"
      onMouseDown={() => console.log('down')}
      onMouseUp={() => console.log('up')}
    >
      {[...Array(squareNum).keys()].map((_, index) => {
        return (
          <Line
            key={index}
            vertical={index}
            colors={colors}
            handleColorChange={handleColorChange}
            squareNum={squareNum}
          />
        )
      })}
    </div>
  )
}

export default Board
