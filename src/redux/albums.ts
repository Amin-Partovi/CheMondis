import { createSlice } from "@reduxjs/toolkit";

import { asyncActionCreator } from "../utils/asyncActionCreator";
import { AlbumsReduxState } from "../utils/types";

export const fetchAlbums = asyncActionCreator({
  type: "getAlbums",
  url: "/albums",
});

const initialState = {
  data: [],
  loading: "idle",
  error: "",
} as AlbumsReduxState;

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.pending, (state: AlbumsReduxState) => {
      state.loading = "pending";
    });
    builder.addCase(
      fetchAlbums.fulfilled,
      (state: AlbumsReduxState, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      }
    );
    builder.addCase(fetchAlbums.rejected, (state: AlbumsReduxState, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
  },
});

export default albumsSlice.reducer;
