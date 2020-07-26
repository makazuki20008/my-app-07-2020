import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders reactjs redux link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/reactjsredux/i);
  expect(linkElement).toBeInTheDocument();
});
