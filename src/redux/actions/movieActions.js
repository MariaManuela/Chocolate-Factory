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

export const setBannerBackgroundImage = (backgroundSrc) => {
  return {
    type: MovieAction.SET_BANNER_BACKGROUND_IMAGE,
    payload: { src: backgroundSrc },
  };
};
