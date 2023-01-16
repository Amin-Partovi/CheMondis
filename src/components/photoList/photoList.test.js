import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import render from "../../testUtils/renderWithProvider";
import PhotoList from "./PhotoList";

describe("photo list", () => {
  beforeEach(() => {
    render(<PhotoList />);
  });

  test("render album title", async () => {
    const header = await screen.findByRole("heading", { level: 1 });
    expect(header).toBeInTheDocument();
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

  test("click on an photo card open a modal", async () => {
    const cards = await screen.findAllByTestId("card");
    const firstCard = cards[0];
    await userEvent.click(firstCard);
    const metaData = await screen.findByRole("meta-data");
    expect(metaData).toBeInTheDocument();
  });
});
