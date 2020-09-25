import React from 'react';
import { render, cleanup } from '@testing-library/react'; // 'render' will render the component being tested & 'cleanup' will remove components from the DOM after testing
import '@testing-library/jest-dom/extend-expect'; // this library offers access to custom matchers that are used to test DOM elements

// import the component we are testing
import About from '..';

afterEach(cleanup); // to ensure that after each test we won't have any leftover memory data that could give us false results

// declare the component we're testing
describe('About component', () => {
  // first test - verify that the component is rendering
  it('renders', () => {
    render(<About />);
  });
  // second test - compare snapshot versions of the DOM node structure
  it('matches snapshot DOM node structure', () => {
    // render About
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
