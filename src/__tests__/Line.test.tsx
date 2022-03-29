import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Line from '../components/Line'

describe('Line', () => {
  it('Line', () => {
    const handleColorChange = jest.fn()
    const setIsOnMouseDown = jest.fn()
    render(
      <Line
        vertical={0}
        colors={[...Array(8).keys()].map((num) =>
          [...Array(8).keys()].map(() => '#ffffff')
        )}
        handleColorChange={handleColorChange}
        squareNum={8}
        isOnMouseDown={false}
        setIsOnMouseDown={setIsOnMouseDown}
      />
    )
    expect(screen.getByTestId('square-0-0')).toBeInTheDocument()
    expect(screen.getByTestId('square-0-1')).toBeInTheDocument()
    expect(screen.getByTestId('square-0-2')).toBeInTheDocument()
    expect(screen.getByTestId('square-0-3')).toBeInTheDocument()
    expect(screen.getByTestId('square-0-4')).toBeInTheDocument()
    expect(screen.getByTestId('square-0-5')).toBeInTheDocument()
    expect(screen.getByTestId('square-0-6')).toBeInTheDocument()
    expect(screen.getByTestId('square-0-7')).toBeInTheDocument()
    // 存在しないことの確認
    expect(screen.queryByTestId('square-1-0')).toBeNull()
  })
})
