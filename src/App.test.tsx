import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders catalog heading', async () => {
  render(<App />);
  const headingElement = await screen.findByRole('heading', {
    name: /каталог фильмов/i,
  });
  expect(headingElement).toBeInTheDocument();
});