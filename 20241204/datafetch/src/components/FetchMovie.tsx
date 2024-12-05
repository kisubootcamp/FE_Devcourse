import axios from "axios";
import { useEffect } from "react";

export default function FetchMovie() {
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  const getMovie = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        method: "GET", //대문자
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    console.log(data);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <h1>FetchMovie</h1>
    </>
  );
}
