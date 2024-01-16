import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import moviesSlice from "./movies/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
