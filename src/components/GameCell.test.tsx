import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GameCell from './GameCell';
import { Game } from '../interfaces/Game';

const mockGame: Game = {
    id: 1,
    name: 'Test Game',
    slug: 'test-game',
    background_image: 'https://example.com/test-image.jpg',
    metacritic: 90,
    released: '2023-01-01',
    tba: false,
    rating: 0,
    rating_top: 0,
    ratings: {},
    ratings_count: 0,
    reviews_text_count: '',
    added: 0,
    added_by_status: {},
    playtime: 0,
    suggestions_count: 0,
    updated: '2023-01-02',
    esrb_rating: [],
    platforms: {}
};

test('renders game cell with correct content', () => {
  const handleClick = jest.fn();

  render(<GameCell game={mockGame} onClick={handleClick} />);

  const gameName = screen.getByText(/Test Game/i);
  expect(gameName).toBeInTheDocument();

  const gameImage = screen.getByAltText(/test-game/i);
  expect(gameImage).toBeInTheDocument();
  expect(gameImage).toHaveAttribute('src', 'https://example.com/test-image.jpg');
});

test('calls onClick handler with correct id when clicked', () => {
  const handleClick = jest.fn();

  render(<GameCell game={mockGame} onClick={handleClick} />);

  const gameCell = screen.getByRole('img', { name: /test-game/i }).closest('div');
  fireEvent.click(gameCell!);

  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(handleClick).toHaveBeenCalledWith(1);
});
