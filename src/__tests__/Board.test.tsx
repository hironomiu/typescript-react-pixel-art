import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Board from '../components/Board'

describe('Board', () => {
  it('Board', () => {
    render(
      <Board
        colors={[...Array(8).keys()].map((num) =>
          [...Array(8).keys()].map(() => '#ffffff')
        )}
        handleColorChange={() => null}
        squareNum={8}
        isOnMouseDown={() => null}
        setIsOnMouseDown={() => null}
      />
    )
    expect(screen.getByTestId('square-0-0')).toBeInTheDocument()
    expect(screen.getByTestId('square-7-7')).toBeInTheDocument()
  })
})
