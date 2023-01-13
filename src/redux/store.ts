import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import albums from "./albums";
import photos from "./photos";
import users from "./users";
import albumInfo from "./albumInfo";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  albumInfo: persistReducer(persistConfig, albumInfo),
  albums,
  photos,
  users,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
