import { render, screen } from "@testing-library/react";
import { Pagination } from "../Pagination";

describe("when rendered with a `totalPages` prop", () => {
  it("should be 12 pagination btns", () => {
    render(<Pagination totalPages={12} />);
    const totalPagesButton = screen.getAllByTestId("total-pages-btn");
    expect(totalPagesButton).toHaveLength(12);
  });
});
