import { render, screen } from '@testing-library/react';
import { Main } from '../Main';


describe("when rendered with a `name` prop", () => {
  it('renders main text', () => {
    render(<Main/>)
  });
})
