import { MovieAction } from "../actions/movieActionsConstants";

const initialState = {
  favouriteMovies: [],
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

    default:
      return state;
  }
}
