import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm component', () => {
  // baseline test
  it('renders', () => {
    render(<ContactForm />);
  });
  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('text is visible', () => {
  it('inserts text into title and button', () => {
    // arrange
    const { getByTestId } = render(<ContactForm />);
    // assert
    expect(getByTestId('h1contact')).toHaveTextContent('Contact me');
    expect(getByTestId('submitContact')).toHaveTextContent('Submit');
  });
});
