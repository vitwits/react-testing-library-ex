import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('displaying correct header from prop', async () => {
  render(<Header title="My Header" />); 
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});
