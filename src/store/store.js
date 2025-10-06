import { configureStore } from "@reduxjs/toolkit";
import { heroImageApi } from "./slices/HeroImage";
import projectApi from "./slices/projectSlice";

const store = configureStore({
  reducer: {
    [heroImageApi.reducerPath]: heroImageApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      heroImageApi.middleware,
      projectApi.middleware
    ),
});
export default store;
