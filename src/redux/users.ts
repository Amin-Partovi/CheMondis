import { createSlice } from "@reduxjs/toolkit";
import { asyncActionCreator } from "../utils/asyncActionCreator";

export const fetchUsers = asyncActionCreator({
  type: "getUsers",
  url: "/users",
});

interface UsersState {
  data: any;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
}

const initialState = {
  data: [],
  loading: "idle",
  error: "",
} as UsersState;

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state: UsersState) => {
      state.loading = "pending";
    });
    builder.addCase(fetchUsers.fulfilled, (state: UsersState, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state: UsersState, action) => {
      state.loading = "failed";
      state.error = action.error.message;
    });
  },
});

export default usersSlice.reducer;
