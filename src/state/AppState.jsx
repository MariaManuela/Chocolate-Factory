import { configureStore } from "@reduxjs/toolkit";
import addToFavReducer from "../reducers/MoviePage.jsx";

export default configureStore({
  reducer: {
    addToFav: addToFavReducer,
  },
});
