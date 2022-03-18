import Square from './Square'

// TODO 型
const Line = ({
  vertical,
  colors,
  handleColorChange,
  squareNum,
  isOnMouseDown,
  setIsOnMouseDown,
}: any) => {
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
