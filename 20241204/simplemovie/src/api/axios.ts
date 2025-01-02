import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDkzYTllZTk2YzUwODlkMmYxNTNlNDdiOWU4YzBhYSIsIm5iZiI6MTczMzI5MTMwNS4xNjgsInN1YiI6IjY3NGZlZDI5NjU2NzAyYTc5MmZmYWRlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gD5df8vcuE6tgc2uX7CbOeZ5qYOo8OCxnksHYI_SvA4",
  },
});
