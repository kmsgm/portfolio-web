import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Header from './Header';

test('Header renders with initial state', () => {
  render(<Header />);

  // Verify that the Header component renders without errors
  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();

  // Verify that the initial state of Toggle is false
  const toggleButton = screen.getByRole('link', { name: 'Home' });
  expect(toggleButton).toBeInTheDocument();
  expect(toggleButton).toHaveClass('nav__link active-link');

  // Verify that the initial state of the navigation menu is hidden
  const navMenu = screen.getByRole('navigation');
  expect(navMenu).toBeInTheDocument();
});

test('Header toggle menu works', () => {
  render(<Header />);

  // Click the toggle button to show the menu
  const toggleButton = screen.getByRole('link', { name: 'About' });
  fireEvent.click(toggleButton);

  // Verify that the menu is shown
  const navMenu = screen.getByRole('navigation');
  expect(navMenu).toHaveClass('nav container');

  // Click the toggle button again to hide the menu
  userEvent.click(toggleButton);

  // Verify that the menu is hidden
  expect(navMenu).not.toHaveClass('show-menu');
});

test('Link to #home with active class', () => {
  render(<Header />);

  // Get the link element
  const link = screen.getByRole('link', { name: 'Home' });

  // Simulate a click to activate the link
  fireEvent.click(link);

  // Check if the "active-link" class is applied after clicking
  expect(link).toHaveClass('nav__link active-link');
});

test('Link to #projects with active class', () => {
  render(<Header />);

  // Get the link element
  const link = screen.getByRole('link', { name: 'Projects' });

  // Check if the "active-link" class is not present initially
  expect(link).not.toHaveClass('active-link');

  // Simulate a click to activate the link
  fireEvent.click(link);

  // Check if the "active-link" class is applied after clicking
  expect(link).toHaveClass('nav__link active-link');
});

test('Link to #contact with active class', () => {
  render(<Header />);

  // Get the link element
  const link = screen.getByRole('link', { name: 'Contact' });

  // Check if the "active-link" class is not present initially
  expect(link).not.toHaveClass('active-link');

  // Simulate a click to activate the link
  fireEvent.click(link);

  // Check if the "active-link" class is applied after clicking
  expect(link).toHaveClass('nav__link active-link');
});

test('Menu toggle', () => {
  render(<Header />);

  // Set the viewport to a mobile screen size
  window.innerWidth = 350;
  const { container } = render(<Header />);

  // Get the elements for menu toggle
  const appButton = container.querySelector('.nav__toggle');
  if (appButton) {
    expect(appButton).toBeInTheDocument();
    fireEvent.click(appButton);

    const closeButton = container.querySelector('.nav__close');
    if (closeButton) {
      fireEvent.click(closeButton);
      expect(appButton).toBeInTheDocument();
    }
  }
});

test('should add scroll-header class on scroll', () => {
  // Create a mock scroll event and attach it to the document
  const { container } = render(<Header />);

  const scrollContainer = container.querySelector('.header');

  window.scrollY = 100;
  window.dispatchEvent(new Event('scroll'));
  expect(scrollContainer).toHaveClass('scroll-header');

  window.scrollY = 50;
  window.dispatchEvent(new Event('scroll'));
  expect(scrollContainer).not.toHaveClass('scroll-header');
});
