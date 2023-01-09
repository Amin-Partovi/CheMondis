import { configureStore } from "@reduxjs/toolkit";
import albums from "./albums";
import album from "./album";
import users from "./users";

const store = configureStore({
  reducer: { albums, album, users },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
