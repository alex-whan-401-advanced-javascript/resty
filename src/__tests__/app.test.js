import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import Results from '../components/results/Results';

it('should render Star Wars list', () => {
  const person = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
  };
  const header = 'application/json';
  render(<Results count={82} headers={header} results={person} />);
  const results = screen.getByTestId('results');
  expect(results).toHaveTextContent('Results:');
});
