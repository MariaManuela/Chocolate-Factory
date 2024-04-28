import { MovieAction } from "../actions/movieActionsConstants";

const initialState = {
  favouriteMovies: [],
  movieBackgroundPicture: {
    movieBackgroundSrc: null,
  },
  randomBannerImage: {
    randomBannerImageSrc: [],
  },
  movieDetails: {
    movieData: [],
  },
  movieIds: [],
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
    case MovieAction.RANDOM_IMAGE_RENDER:
      return {
        ...state,
        randomBannerImage: {
          randomBannerImageSrc: action.payload.data,
        },
      };
    case MovieAction.SET_MOVIE_IDS:
      return {
        ...state,
        movieIds: action.payload.data,
      };

    default:
      return state;
  }
}
