import { useEffect } from "react";

export default function FetchMovie() {
  const getMovie = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWJiMTIyY2NiY2NmOTJhOGEwMGRiMzZjM2M1Y2FkYSIsIm5iZiI6MTY5MTQyMTM5Ny4yNjMsInN1YiI6IjY0ZDEwYWQ1NGQ2NzkxMDBhY2YxOGYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AaSj5paV0NE1ulc7CmSR9ySz5uiHZzkNO_GcgNwLuFY",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovie();
  }, []);
  return <div>FetchMovie</div>;
}
