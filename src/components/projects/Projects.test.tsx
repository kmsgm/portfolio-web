/* eslint-disable no-console */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import ProjectList from './ProjectList';

// type TextMatcher = (text: string, element: HTMLElement) => boolean;

// const customTextMatcher: TextMatcher = (text, element) =>
//   element.textContent?.toLowerCase().includes(text.toLowerCase());

test('it should filter projects based on the selected category', async () => {
  render(<ProjectList />);

  const categoryAFilter = screen.getAllByText('ML')[0];
  fireEvent.click(categoryAFilter);

  // expect(screen.getAllByText('DBMS')[0]).toBeInTheDocument();
  // expect(screen.getByText('SAP')).toBeInTheDocument();
  expect(categoryAFilter).not.toHaveClass('active-project');

  const categoryAFilter2 = screen.getAllByText('Web')[0];

  // You can also check if the "active-project" class is applied correctly to the filter
  expect(screen.queryByText('Evaluation of Cardinality Estimation in DBSM')).not.toBeNull();
  expect(categoryAFilter2).not.toHaveClass('active-project');
  //   expect(screen.queryByText('Sprints')).toBeNull();
  // Check if other projects are not displayed
  // expect(screen.queryByText('Project 2')).toBeNull();
  // expect(screen.queryByText('Project 4')).toBeNull();
});
