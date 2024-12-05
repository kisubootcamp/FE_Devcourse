import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZjODUwZmVkZDY0YTUwN2U1MWNmYjIzMzVmMzA1YyIsIm5iZiI6MTYyOTg2MzI1Ny4xMjk5OTk5LCJzdWIiOiI2MTI1YmQ1OThjMzE1OTAwNjI5ODk1MzUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pkibN_qeBiimGs0Yhy8thv9kDfVTV8Jojx8tIAGGw48",
  },
});

export const kakaoInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZjODUwZmVkZDY0YTUwN2U1MWNmYjIzMzVmMzA1YyIsIm5iZiI6MTYyOTg2MzI1Ny4xMjk5OTk5LCJzdWIiOiI2MTI1YmQ1OThjMzE1OTAwNjI5ODk1MzUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pkibN_qeBiimGs0Yhy8thv9kDfVTV8Jojx8tIAGGw48",
  },
});

export const googleInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZjODUwZmVkZDY0YTUwN2U1MWNmYjIzMzVmMzA1YyIsIm5iZiI6MTYyOTg2MzI1Ny4xMjk5OTk5LCJzdWIiOiI2MTI1YmQ1OThjMzE1OTAwNjI5ODk1MzUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pkibN_qeBiimGs0Yhy8thv9kDfVTV8Jojx8tIAGGw48",
  },
});
