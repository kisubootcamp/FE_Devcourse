import axios from "axios";
import React, { useEffect } from "react";

export default function FetchMovie() {
  const getMovie = async () => {
    const options = {
      method: "GET", // 대문자
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzZjNTNmOTljZWY1YzA3YWU3NzcyOWFmNzUzZTBhNSIsIm5iZiI6MTcwODk5Nzc1Ny41NDIsInN1YiI6IjY1ZGQzYzdkYTg5NGQ2MDE4NzBjNmU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h_3I4MlbsenedR6hWUzVEsbWk151Kn6rc-L_6uxCcvM",
      },
    };

    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1&region=KR",
      options
    );
    console.log(data);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <div>FetchMovie</div>;
}
