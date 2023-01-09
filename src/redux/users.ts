import { createSlice } from "@reduxjs/toolkit";

import { asyncActionCreator } from "../utils/asyncActionCreator";
import { UsersReduxState } from "../utils/types";

export const fetchUsers = asyncActionCreator({
  type: "getUsers",
  url: "/users",
});

const initialState = {
  data: [],
  loading: "idle",
  error: "",
} as UsersReduxState;

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state: UsersReduxState) => {
      state.loading = "pending";
    });
    builder.addCase(fetchUsers.fulfilled, (state: UsersReduxState, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state: UsersReduxState, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
  },
});

export default usersSlice.reducer;
