const API_KEY = "cd7aeec7780132cd34e84575873a2f94";
const BASE_URL = "https://api.themoviedb.org/3";

// Now playing 
export const getNowPlayingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`
  );
  return response.json();
}

// top_rated
export const getTopMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`
  );
  return response.json();
}

// upcoming
export const getUpcomingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`
  );
  return response.json();
}
