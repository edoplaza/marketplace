import { render, screen } from '@testing-library/react'
import Button from './index'

it('Should render same text passed into text prop', async () => {
  render(<Button text="My Button Text" />)
  const ButtonElement = screen.getByText(/my button text/i)
  expect(ButtonElement).toBeInTheDocument()
})
