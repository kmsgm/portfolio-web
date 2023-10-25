import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders App component', () => {
  render(<App />);

  expect(screen.getByRole('link', { name: 'Minseo Kim' })).toBeInTheDocument();
});
