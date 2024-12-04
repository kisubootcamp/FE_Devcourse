import axios from "axios";

export const getMovie = async (category: string) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${category}`,
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWJiMTIyY2NiY2NmOTJhOGEwMGRiMzZjM2M1Y2FkYSIsIm5iZiI6MTY5MTQyMTM5Ny4yNjMsInN1YiI6IjY0ZDEwYWQ1NGQ2NzkxMDBhY2YxOGYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AaSj5paV0NE1ulc7CmSR9ySz5uiHZzkNO_GcgNwLuFY",
    },
  };
  try {
    const { data } = await axios.request(options);

    return data;
  } catch (error) {
    console.error(error);
  }
};
