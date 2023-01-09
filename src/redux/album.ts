import { createSlice } from "@reduxjs/toolkit";
import { asyncActionCreator } from "../utils/asyncActionCreator";

export const fetchAlbum = asyncActionCreator({
  type: "getAlbum",
  url: "/photos",
});

interface AlbumState {
  data: any;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
}

const initialState = {
  data: [],
  loading: "idle",
  error: "",
} as AlbumState;

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbum.pending, (state: AlbumState) => {
      state.loading = "pending";
    });
    builder.addCase(fetchAlbum.fulfilled, (state: AlbumState, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(fetchAlbum.rejected, (state: AlbumState, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
  },
});

export default albumSlice.reducer;
