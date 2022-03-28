import { useMain } from '../hooks/useMain'
import Board from './Board'
import Form from './Form'

const Main = () => {
  const {
    color,
    setColor,
    colors,
    squareNum,
    isOnMouseDown,
    setIsOnMouseDown,
    handleColorChange,
    handleRadioChange,
  } = useMain()

  return (
    <div className="text-2xl flex flex-col justify-center items-center ">
      <h1 className="my-4" data-testid="main-h1">
        Pixel Art App
      </h1>

      <div className="h-80">
        <Board
          colors={colors}
          handleColorChange={handleColorChange}
          squareNum={squareNum}
          isOnMouseDown={isOnMouseDown}
          setIsOnMouseDown={setIsOnMouseDown}
        />
      </div>
      <Form
        color={color}
        setColor={setColor}
        handleRadioChange={handleRadioChange}
        squareNum={squareNum}
      />
    </div>
  )
}

export default Main
