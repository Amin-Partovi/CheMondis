import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import App from "./App";
import store from "./redux/store";

describe("album list", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test("click on an album open loading screen", async () => {
    const cards = await screen.findAllByTestId("card");
    const firstCard = cards[0];
    await userEvent.click(firstCard);
    const loading = await screen.findByTestId("loading");
    expect(loading).toBeInTheDocument();
  });

  test("after click on the album card the route changes to PhotoList component", async () => {
    const cards = await screen.findAllByTestId("card");
    const firstCard = cards[0];
    await userEvent.click(firstCard);

    const header = await screen.findByRole("heading", { level: 1 });
    expect(header).toBeInTheDocument();
  });
});
