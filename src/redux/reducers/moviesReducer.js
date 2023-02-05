import { MovieAction } from "../actions/movieActionsConstants";

const initialState = {
  favouriteMovies: [],
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case MovieAction.ADD_TO_FAVOURITE:
      console.log(state, action);
      return {
        ...state,
        favouriteMovies: [...state.favouriteMovies, action.payload.id],
      };
    default:
      return state;
  }
}
