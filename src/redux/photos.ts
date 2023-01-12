import { createSlice } from "@reduxjs/toolkit";

import { asyncActionCreator } from "../utils/asyncActionCreator";
import { AlbumReduxState } from "../utils/types";

export const fetchPhotos = asyncActionCreator({
  type: "getPhotos",
  url: "/photos",
});

const initialState = {
  data: [],
  loading: "idle",
  error: "",
} as AlbumReduxState;

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.pending, (state: AlbumReduxState) => {
      state.loading = "pending";
    });
    builder.addCase(fetchPhotos.fulfilled, (state: AlbumReduxState, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(fetchPhotos.rejected, (state: AlbumReduxState, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
  },
});

export default photosSlice.reducer;
