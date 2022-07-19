import { fireEvent, render, screen } from "@testing-library/react";
import { Favorites } from "../Favorites";

describe("check favorite component", () => {
  it("it should trigger showFavorites state", () => {
    render(<Favorites favorite={[]} />);
    const testButton = screen.getByTestId("test-button");
    fireEvent.click(testButton);
    const testDiv = screen.getByTestId("test-div");
    expect(testDiv).toBeInTheDocument();
  });
});
