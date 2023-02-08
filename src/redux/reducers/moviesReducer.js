import { MovieAction } from "../actions/movieActionsConstants";

const initialState = {
  favouriteMovies: [],
  movieBackgroundPicture: {
    movieBackgroundSrc: null,
  },
  movieDetails: {
    movieData: [],
  },
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case MovieAction.ADD_TO_FAVOURITE:
      return {
        ...state,
        favouriteMovies: [...state.favouriteMovies, action.payload.id],
      };
    case MovieAction.REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favouriteMovies: [
          ...state.favouriteMovies.filter(
            (favouriteMovie) => favouriteMovie !== action.payload.id
          ),
        ],
      };
    case MovieAction.SET_BANNER_BACKGROUND_IMAGE:
      return {
        ...state,
        movieBackgroundPicture: {
          movieBackgroundSrc: action.payload.src,
        },
      };
    case MovieAction.DISPLAY_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: {
          movieData: action.payload.data,
        },
      };

    default:
      return state;
  }
}
