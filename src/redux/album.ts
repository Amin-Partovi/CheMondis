import { createSlice } from "@reduxjs/toolkit";

import { asyncActionCreator } from "../utils/asyncActionCreator";
import { AlbumReduxState } from "../utils/types";

export const fetchAlbum = asyncActionCreator({
  type: "getAlbum",
  url: "/photos",
});

const initialState = {
  data: [],
  loading: "idle",
  error: "",
} as AlbumReduxState;

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbum.pending, (state: AlbumReduxState) => {
      state.loading = "pending";
    });
    builder.addCase(fetchAlbum.fulfilled, (state: AlbumReduxState, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(fetchAlbum.rejected, (state: AlbumReduxState, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
  },
});

export default albumSlice.reducer;
