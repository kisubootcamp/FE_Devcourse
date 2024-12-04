import { useEffect } from "react";

export default function FetchMovie() {
  const getMovie = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGY2MDA2MzYzMzlmNmMwZGMxMmYzYTkzNTQzNTNiMSIsIm5iZiI6MTczMzI5MTI1NC4wNjIsInN1YiI6IjY3NGZlY2Y2NDQ4NDdlOTdkZmY0MDQxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VXhMCB6eaTvR5ym65AnemlHsp3T5QyP0TNFV9gcfb48",
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
