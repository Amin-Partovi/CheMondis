import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import render from "../../testUtils/renderWithProvider";
import AlbumList from "./AlbumList";

describe("album list", () => {
  beforeEach(() => {
    render(<AlbumList />);
  });

  test("render pagination", async () => {
    const pagination = await screen.findByTestId("pagination");
    expect(pagination).toBeInTheDocument();
  });

  test("render page limit", async () => {
    const pageLimit = await screen.findByText("per page");
    expect(pageLimit).toBeInTheDocument();
  });

  test("click on 50 in the page limit, limit the number of cards to 50 in the list", async () => {
    const listItems = await screen.findByText(50);
    await userEvent.click(listItems);
    const cards = await screen.findAllByTestId("card");
    expect(cards).toHaveLength(50);
  });

  test("click on 20 in the page limit, limit the number of cards to 20 in the list", async () => {
    const listItems = await screen.findByText(20);
    await userEvent.click(listItems);
    const cards = await screen.findAllByTestId("card");
    expect(cards).toHaveLength(20);
  });
});
