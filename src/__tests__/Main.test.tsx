import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Main from '../components/Main'

describe('Main', () => {
  it('Main', () => {
    render(<Main />)
    expect(screen.getByRole('heading')).toBeTruthy()
    expect(screen.getByTestId('main-h1')).toBeTruthy()
    expect(screen.getByText('Pixel Art App')).toBeInTheDocument()
  })
})
