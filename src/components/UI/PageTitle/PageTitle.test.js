import { render, screen } from '@testing-library/react'
import PageTitle from './index'

it('Should render same text passed into text prop', async () => {
  render(<PageTitle text="My Page Title" />)
  const titleElement = screen.getByText(/my page title/i)
  expect(titleElement).toBeInTheDocument()
})
