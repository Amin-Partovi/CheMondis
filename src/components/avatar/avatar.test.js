import { screen } from "@testing-library/react";
import render from "../../testUtils/renderWithProvider";
import Avatar from "./Avatar";

describe("avatar", () => {
  beforeEach(async () => {
    render(<Avatar username="Bret" color="red" />);
  });
  test("render owner username", async () => {
    // render(<Avatar username="Bret" color="red" />);
    const avatar = await screen.findByTestId("avatar");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveTextContent("Bret");
  });

  test("render avatar with the provided color", async () => {
    const placeholder = await screen.findByTestId("placeholder");
    expect(placeholder).toHaveStyle("background-color: red");
  });
});
