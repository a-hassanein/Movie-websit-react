import axios from "axios";

const allMovies =axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=2da9d36a0ac2209c177dc61e2e005ab4&language=en-US&page= '
});

const moviesInfo =axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/'
});

const imagePath =axios.create({
    baseURL: 'https://image.tmdb.org/t/p/w500/'
});

const genres = axios.create({
    baseURL: `https://api.themoviedb.org/3/genre/movie/list?api_key=2da9d36a0ac2209c177dc61e2e005ab4`,
  });

export {allMovies ,moviesInfo,imagePath ,genres};