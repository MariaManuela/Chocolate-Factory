import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/moviesReducer.js";

export default configureStore({
  reducer: {
    moviesReducer: moviesReducer,
  },
});
