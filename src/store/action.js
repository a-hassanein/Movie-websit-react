export const addToFavPage = (movieId) => {
    return {
      type: "ADD_TO_FAV",
      movieId,
    };
  };
  
  export const delFromFavePage = (movieId) => {
    return {
      type: "DEL_FROM_FAV",
      movieId
    };
  };