import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Form from '../components/Form'

describe('Form', () => {
  it('Form', () => {
    render(
      <Form
        color="#000000"
        setColor={() => null}
        handleRadioChange={() => null}
        squareNum={8}
      />
    )
    expect(screen.getByText('選択')).toBeInTheDocument()
    expect(screen.getByText('8 x 8')).toBeInTheDocument()
    expect(screen.getByText('16 x 16')).toBeInTheDocument()
  })
})
