import { render, screen, fireEvent } from '@testing-library/react'
import Button from './index'

it('Should render same text passed into text prop', async () => {
  render(<Button text="My Button Text" />)
  const ButtonElement = screen.getByText(/my button text/i)
  expect(ButtonElement).toBeInTheDocument()
})

const mockedAddToCart = jest.fn()

it('Should trigger a function when clicked', async () => {
  render(<Button text="Add to cart" onClick={mockedAddToCart} />)
  const ButtonElement = screen.getByText(/add to cart/i)
  fireEvent.click(ButtonElement)
  expect(mockedAddToCart).toHaveBeenCalled()
})
