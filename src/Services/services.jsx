import axios from 'axios';

export const BASE_URL = 'https://api.themoviedb.org/3';
export const KEY = 'api_key=34aace01c22833500b5a31ff5ef2542a';
export const PARAM_FILMS_DAY = '/trending/movie/day?';
export const PARAM_SEARCH_MOVIE = '/search/movie?';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
export const MOVIE = '/movie/';
export const PARAMS_CREDITS = '/credits?';
export const PARAMS_REVIEWS = '/reviews?';
export const PARAMS_LANGUAGE = '&language=en-US';

export async function fetchMovie(query) {
  const res = await axios.get(
    `${BASE_URL}${PARAM_SEARCH_MOVIE}${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return res.data.results;
}

export async function fetchCast(movieId) {
  const res = await axios.get(
    `${BASE_URL}${MOVIE}${movieId}${PARAMS_CREDITS}${KEY}${PARAMS_LANGUAGE}`
  );
  return res.data.cast;
}

export async function fetchReviews(movieId) {
  const res = await axios.get(
    `${BASE_URL}${MOVIE}${movieId}${PARAMS_REVIEWS}${KEY}${PARAMS_LANGUAGE}&page=1`
  );
  return res.data.results;
}

export async function fetchDaysFilms() {
  const res = await axios.get(`${BASE_URL}${PARAM_FILMS_DAY}${KEY}`);
  return res.data.results;
}

export async function fetchMovieDetails(movieId) {
  const res = await axios.get(
    `${BASE_URL}${MOVIE}${movieId}?${KEY}${PARAMS_LANGUAGE}`
  );
  return res.data;
}
