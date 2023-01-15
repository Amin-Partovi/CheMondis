import { screen, waitFor } from "@testing-library/react";
import render from "../../testUtils/renderWithProvider";
import Card from "./Card";

const user = {
  id: 1,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

const albumProps = {
  data: { userId: 1, id: 1, title: "eaque aut omnis a" },
  imageSrc: "https://via.placeholder.com/150/00ff",
  withAvatar: true,
  user,
};

const photoProps = {
  data: {
    albumId: 2,
    id: 51,
    thumbnailUrl: "https://via.placeholder.com/150/8e973b",
    title: "non sunt voluptatem placeat consequuntur rem incidunt",
    url: "https://via.placeholder.com/600/8e973b",
  },
  withAvatar: false,
  imageSrc: "https://via.placeholder.com/150/00ff",
  user,
};

describe("album card", () => {
  beforeEach(async () => {
    render(<Card {...albumProps} />);
  });
  test("render avatar", async () => {
    const avatar = await screen.findByTestId("avatar");
    expect(avatar).toBeInTheDocument();
  });

  test("render album title", async () => {
    const titleText = albumProps.data.title;
    const title = await screen.findByRole("heading", { level: 2 });
    expect(title).toHaveTextContent(titleText);
  });

  test("render a fixed placeholder as a cover", async () => {
    const titleText = albumProps.data.title;
    const image = await screen.findByAltText(titleText);
    expect(image).toHaveAttribute("src", albumProps.imageSrc);
  });
});

describe("photo card", () => {
  beforeEach(async () => {
    render(<Card {...photoProps} />);
  });
  test("not to render avatar", async () => {
    let avatar;
    await waitFor(() => {
      avatar = screen.queryByTestId("avatar");
    });
    expect(avatar).toBeFalsy();
  });

  test("render photo title", async () => {
    const titleText = photoProps.data.title;
    const title = await screen.findByRole("heading", { level: 2 });
    expect(title).toHaveTextContent(titleText);
  });

  test("render a photo thumbnail as a cover", async () => {
    const titleText = photoProps.data.title;
    const image = await screen.findByAltText(titleText);
    expect(image).toHaveAttribute("src", photoProps.data.thumbnailUrl);
  });
});
