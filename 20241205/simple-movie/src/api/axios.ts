import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWNhMDg3ZTE0MDM3M2E1NzY2ZTQ3YjI0OTJhODRkNyIsIm5iZiI6MTczMzI5MTI1Ni4yNTksInN1YiI6IjY3NGZlY2Y4NjU2NzAyYTc5MmZmYWRhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._xjH8K_4RrKCmdFhrJhCx1_Dd8ZUM5rzZ82Etl2XZT4",
  },
});
