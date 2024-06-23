import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

test('renders header with correct links', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();
  expect(homeLink).toHaveAttribute('href', '/');

  const gamesLink = screen.getByText(/Games/i);
  expect(gamesLink).toBeInTheDocument();
  expect(gamesLink).toHaveAttribute('href', '/games');

  const bestLink = screen.getByText(/Best/i);
  expect(bestLink).toBeInTheDocument();
  expect(bestLink).toHaveAttribute('href', '/best');
});
