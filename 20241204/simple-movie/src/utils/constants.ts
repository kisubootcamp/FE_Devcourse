export const BASE_IMG_URL = `https://image.tmdb.org/t/p/original`;
export const BASE_URL = `https://api.themoviedb.org/3`;
export const TMDB_BEARER_TOKEN = import.meta.env
  .VITE_REACT_APP_TMDB_BEARER_TOKEN;

export const NOW_PLAYING_ENDPOINT = `/movie/now_playing`
export const POPULAR_ENDPOINT = `/movie/popular`
export const UPCOMING_ENDPOINT = `/movie/upcoming`