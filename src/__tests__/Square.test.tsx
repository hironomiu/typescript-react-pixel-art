import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Square from '../components/Square'

describe('Square', () => {
  it('Square', () => {
    render(
      <Square
        vertical={0}
        horizontal={0}
        colors="#000000"
        handleColorChange={() => null}
        isOnMouseDown={() => null}
        setIsOnMouseDown={() => null}
      />
    )
    expect(screen.getByTestId('square-0-0')).toBeInTheDocument()
  })
})
