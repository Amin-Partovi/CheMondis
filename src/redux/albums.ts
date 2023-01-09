import { createSlice } from "@reduxjs/toolkit";
import { asyncActionCreator } from "../utils/asyncActionCreator";

export const fetchAlbums = asyncActionCreator({
  type: "getAlbums",
  url: "/albums",
});

interface AlbumsState {
  data: any;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
}

const initialState = {
  data: [],
  loading: "idle",
  error: "",
} as AlbumsState;

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.pending, (state: AlbumsState) => {
      state.loading = "pending";
    });
    builder.addCase(fetchAlbums.fulfilled, (state: AlbumsState, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(fetchAlbums.rejected, (state: AlbumsState, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
  },
});

export default albumsSlice.reducer;
