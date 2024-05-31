import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { locationApi } from "../features/countriesApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [locationApi.reducerPath]: locationApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(locationApi.middleware),
});
