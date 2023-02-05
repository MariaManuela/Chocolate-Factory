import { MovieAction } from "./movieActionsConstants";

export const addToFavourites = (movieId) => {
  console.log("ADD: ", movieId);
  return {
    type: MovieAction.ADD_TO_FAVOURITE,
    payload: { id: movieId },
  };
};
