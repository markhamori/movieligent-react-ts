import { render, screen } from "@testing-library/react";
import { Main } from "../Main";

describe("when rendered with a `movieDetails` prop", () => {
  it("main__movie div should not be rendered", () => {
    render(<Main movieDetails={[]} />);
    const mainMovieDiv = screen.queryByTestId("test-main-movie");
    expect(mainMovieDiv).not.toBeInTheDocument();
  });
});
