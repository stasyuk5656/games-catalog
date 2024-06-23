import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

test('renders footer with correct content', () => {
  render(<Footer />);

  const copyrightText = screen.getByText(/2024 Yevhenii Stasiuk/i);
  const contactLink = screen.getByText(/Contact: yevhenii.stasiuk@gmail.com/i);

  expect(copyrightText).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
  expect(contactLink).toHaveAttribute('href', 'mailto: yevhenii.stasiuk@gmail.com');
});

test('footer has correct class names', () => {
  render(<Footer />);

  const footerElement = screen.getByRole('contentinfo');
  const footerContent = screen.getByText(/2024 Yevhenii Stasiuk/i).parentElement;

  expect(footerElement).toHaveClass('footer');
  expect(footerContent).toHaveClass('footer-content');
});
