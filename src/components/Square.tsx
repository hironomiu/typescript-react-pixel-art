const Square = ({ vertical, horizontal, colors, handleColorChange }: any) => {
  return (
    <div
      className="h-4 w-4 border-b-[1px] border-r-[1px] border-solid border-black"
      style={{ backgroundColor: colors[vertical][horizontal] }}
      onClick={() => {
        console.log(`click: ${vertical} , ${horizontal}`)
        handleColorChange(horizontal)
      }}
      // onMouseMove={() => {

      //   console.log(`move: ${vertical} , ${horizontal}`)
      //   handleColorChange(horizontal)
      // }}
    >
      <span
        onClick={() => console.log(`click: ${vertical} , ${horizontal}`)}
      ></span>
    </div>
  )
}

export default Square
