import { configureStore } from "@reduxjs/toolkit";
import albums from "./albums";
import photos from "./photos";
import users from "./users";
import albumInfo from "./albumInfo";

const store = configureStore({
  reducer: { albums, photos, users, albumInfo },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
