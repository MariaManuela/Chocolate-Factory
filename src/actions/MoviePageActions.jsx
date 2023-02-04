export const AddToFavorites = (movieId) => {
  return {
    type: "favorite/favoriteAdded",
    payload: { id: movieId },
  };
};
