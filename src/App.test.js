import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const titleElement = screen.getByText(/4 Band Resistor Color Code Calculator/i);
  expect(titleElement).toBeInTheDocument();
});