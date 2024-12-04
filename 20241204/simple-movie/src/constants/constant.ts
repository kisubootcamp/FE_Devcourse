export const MOVIE_TYPE = ["Now Playing", "Popular", "Top Rated", "Upcoming"];
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const API_URL = "https://api.themoviedb.org/3/movie/";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmQyZmU4YmQxNjkwYWE2NDE1YmU2ZDgzMGJkYTc0YyIsIm5iZiI6MTczMzI5MTMzMi43MzYsInN1YiI6IjY3NGZlZDQ0NjU2NzAyYTc5MmZmYWUwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Npd0w6Ha_R6AmPp9bmhFP14VK-Luk3HMXIMhyTVu1FQ",
  },
};
