import { render, screen } from '@testing-library/react';
// import { Main } from './Main';

test('renders main text', () => {
  // render(<Main />);
  const divElement = screen.getByText("Main");
  expect(divElement).toBeInTheDocument();
});