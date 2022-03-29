import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import Form from '../components/Form'

describe('Form', () => {
  it('Form', () => {
    const setColor = jest.fn()
    const handleRadioChange = jest.fn()
    render(
      <Form
        color="#000000"
        setColor={setColor}
        handleRadioChange={handleRadioChange}
        squareNum={8}
      />
    )
    expect(screen.getByTestId('label-r')).toBeTruthy()
    expect(screen.getByTestId('label-g')).toBeTruthy()
    expect(screen.getByTestId('label-b')).toBeTruthy()
    expect(screen.getByText('8 x 8')).toBeInTheDocument()
    expect(screen.getByText('16 x 16')).toBeInTheDocument()
    expect(handleRadioChange).not.toHaveBeenCalled()
    userEvent.click(screen.getByTestId('input-square-16'))
    expect(handleRadioChange).toHaveBeenCalled()

    // TODO input color & InputRange を呼び出して calledもテストする
    expect(setColor).not.toHaveBeenCalled()
  })
})
