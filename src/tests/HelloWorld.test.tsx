import '@testing-library/jest-dom';
import { render} from '@testing-library/react';
import {screen} from "@testing-library/dom"
import HelloWorld from '../components/HelloWorld';

test('renders Hello World text', () => {
  render(<HelloWorld />);
  expect(screen.getByText(/Hello, World!/i)).toBeInTheDocument();
});