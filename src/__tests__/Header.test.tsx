import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'
import Header from '@/components/Header'
 
describe('Header', () => {
  it('should render Header component', () => {
      render(<Header />)

      expect(screen.getByText("Header")).toBeInTheDocument()
  })
})