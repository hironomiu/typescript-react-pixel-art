// TODO 型
const Square = ({
  vertical,
  horizontal,
  colors,
  handleColorChange,
  isOnMouseDown,
  setIsOnMouseDown,
}: any) => {
  return (
    <div
      className="h-4 w-4 border-b-[1px] border-r-[1px] border-solid border-black"
      style={{ backgroundColor: colors[vertical][horizontal] }}
      onMouseDown={() => {
        console.log(`click: ${vertical} , ${horizontal}`)
        handleColorChange(horizontal)
        setIsOnMouseDown(true)
      }}
      onMouseMove={() => {
        if (isOnMouseDown) {
          console.log(`move: ${vertical} , ${horizontal}`)
          handleColorChange(horizontal)
        }
      }}
      onMouseUp={() => {
        setIsOnMouseDown(false)
      }}
    >
      <span
        onClick={() => console.log(`click: ${vertical} , ${horizontal}`)}
      ></span>
    </div>
  )
}

export default Square
