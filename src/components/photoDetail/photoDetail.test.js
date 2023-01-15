import { screen } from "@testing-library/react";
import render from "../../testUtils/renderWithProvider";
import PhotoDetail from "./PhotoDetail";

const photoProps = {
  photo: {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  albumTitle: "string",
  owner: "string",
};

describe("photo detail", () => {
  beforeEach(() => {
    render(<PhotoDetail {...photoProps} />);
  });
  test("render photo in the full size", async () => {
    const photoAlt = photoProps.photo.title;
    const image = await screen.findByAltText(photoAlt);
    expect(image).toBeInTheDocument();
  });

  test("render album owner", async () => {
    const metadata = await screen.findByRole("meta-data");
    expect(metadata).toHaveTextContent(photoProps.owner);
  });

  test("render photo title", async () => {
    const metadata = await screen.findByRole("meta-data");
    expect(metadata).toHaveTextContent(photoProps.albumTitle);
  });
});
