import React from 'react';
import { render } from '@testing-library/react';
import chat from './App';

test('renders learn react link', () => {
  const { getByText } = render(<chat />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});