import axios from "axios";
import {
  BASE_URL,
  NOW_PLAYING_ENDPOINT,
  POPULAR_ENDPOINT,
  TMDB_BEARER_TOKEN,
  UPCOMING_ENDPOINT,
} from "../utils/constants";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_BEARER_TOKEN}`,
  },
});

const fetchMovies = async (endpoint: string, page = 1) => {
  try {
    const { data } = await apiClient.get(endpoint, {
      params: { language: "ko-KR", page },
    });
    return data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
};

export const getNowPlaying = (page = 1) => fetchMovies(NOW_PLAYING_ENDPOINT, page);
export const getPopular = (page = 1) => fetchMovies(POPULAR_ENDPOINT, page);
export const getUpcoming = (page = 1) => fetchMovies(UPCOMING_ENDPOINT, page);
