import { MovieAction } from "./movieActionsConstants";

export const addToFavourites = (movieId) => {
  return {
    type: MovieAction.ADD_TO_FAVOURITE,
    payload: { id: movieId },
  };
};

export const removeFromFavourites = (movieId) => {
  return {
    type: MovieAction.REMOVE_FROM_FAVOURITES,
    payload: { id: movieId },
  };
};
