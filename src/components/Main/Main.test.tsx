import { render, screen } from '@testing-library/react';
// import { Main } from './Main';

test('renders main text', () => {
  // render(<Main />);
  const divElement = screen.getByText("Main");
  expect(divElement).toBeInTheDocument();
});

test('is there a button with an alert role in the document', () => {
  // render(<Main />);
  const alertButton = screen.getByRole("alert");
  expect(alertButton).toBeInTheDocument();
});