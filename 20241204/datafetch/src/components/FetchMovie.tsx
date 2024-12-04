import axios from "axios";
import { useEffect } from "react";

export default function FetchMovie() {
  const getMovie = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        method: "GET", // 대문자
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZjODUwZmVkZDY0YTUwN2U1MWNmYjIzMzVmMzA1YyIsIm5iZiI6MTYyOTg2MzI1Ny4xMjk5OTk5LCJzdWIiOiI2MTI1YmQ1OThjMzE1OTAwNjI5ODk1MzUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pkibN_qeBiimGs0Yhy8thv9kDfVTV8Jojx8tIAGGw48",
        },
      }
    );
    console.log(data);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <div>FetchMovie</div>;
}
