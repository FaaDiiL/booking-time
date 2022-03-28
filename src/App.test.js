import { render, screen } from '@testing-library/react'
import App from './App'

test('Should have the title: Booking Time', () => {
  render(<App />)
  const pageTitle = screen.getByText(/Booking Time/i)
  expect(pageTitle).toBeInTheDocument()
})
