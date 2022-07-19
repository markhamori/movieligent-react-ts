import { render, screen } from "@testing-library/react";
import { MovieCard } from "../MovieCard";

describe("when rendered with a `releaseDate & title` prop", () => {
  it("renders only the year yyyy (mm/dd sliced)", () => {
    render(
      <MovieCard
        title={"Test Movie Title"}
        overview={"Test Movie Overview"}
        releaseDate={"2022.02.22"}
        posterPath={null}
        favorite={true}
      />
    );
    const textElement = screen.getByText(/2022/i);
    expect(textElement).toBeInTheDocument();
  });

  it("title should be rendered correctly", () => {
    render(
      <MovieCard
        title={"Test Movie Title"}
        overview={"Test Movie Overview"}
        releaseDate={""}
        posterPath={null}
        favorite={true}
      />
    );
    const h3Element = screen.getByText(/Test Movie Title/i);
    expect(h3Element).toBeInTheDocument();
  });
});
