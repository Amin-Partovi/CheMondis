import { screen } from "@testing-library/react";
import render from "../../testUtils/renderWithProvider";
import PageLimit from "./PageLimit";

describe("page limit", () => {
  test("offer 3 choices of how many albums are shown- on a page (20, 30, 50)", () => {
    render(<PageLimit />);
    const listItems = screen
      .getAllByRole("listitem")
      .map((item) => JSON.parse(item.textContent));
    const pageLimits = [20, 30, 50];

    expect(listItems).toStrictEqual(pageLimits);
  });
});
