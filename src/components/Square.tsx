import { FC } from 'react'

type Props = {
  vertical: number
  horizontal: number
  colors: string[][]
  handleColorChange: (horizontal: number) => void
  isOnMouseDown: boolean
  setIsOnMouseDown: React.Dispatch<React.SetStateAction<boolean>>
}
const Square: FC<Props> = ({
  vertical,
  horizontal,
  colors,
  handleColorChange,
  isOnMouseDown,
  setIsOnMouseDown,
}) => {
  return (
    <div
      data-testid={`square-${vertical}-${horizontal}`}
      className="h-4 w-4 border-b-[1px] border-r-[1px] border-solid border-black"
      style={{ backgroundColor: colors[vertical][horizontal] }}
      onMouseDown={() => {
        handleColorChange(horizontal)
        setIsOnMouseDown(true)
      }}
      onMouseMove={() => {
        if (isOnMouseDown) {
          handleColorChange(horizontal)
        }
      }}
      onMouseUp={() => {
        setIsOnMouseDown(false)
      }}
    ></div>
  )
}

export default Square
