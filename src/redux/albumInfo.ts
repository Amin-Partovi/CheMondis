import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { AlbumData, AlbumInfo, UserData } from "../utils/types";

const initialState: { album: Partial<AlbumData>; user: Partial<UserData> } = {
  album: { userId: null, id: null, title: "" },
  user: {
    id: null,
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
  },
};

const albumInfoSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    setAlbumInfo: (state, action: PayloadAction<AlbumInfo>) =>
      (state = action.payload),
  },
});

export const { setAlbumInfo } = albumInfoSlice.actions;

export default albumInfoSlice.reducer;
