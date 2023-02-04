import * as action from "../actions/MoviePageActions.jsx";
const initialState = { value: false };

export default function addToFavReducer(state = initialState, action) {
  if (action.type === "favorite/favoriteAdded") {
    return {
      ...state,
      value: !state.value,
    };
  }
  return state;
}
