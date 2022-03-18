import Square from './Square'

const Line = ({ vertical, colors, handleColorChange, squareNum }: any) => {
  return (
    <div className="flex flex-row" style={{}}>
      {[...Array(squareNum).keys()].map((_, index) => (
        <Square
          key={index}
          vertical={vertical}
          horizontal={index}
          colors={colors}
          handleColorChange={handleColorChange(vertical)}
        />
      ))}
    </div>
  )
}

export default Line
