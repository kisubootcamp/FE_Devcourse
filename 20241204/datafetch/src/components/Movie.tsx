import axios from "axios";
import { useEffect } from "react";

export default function Movie() {
  // const getMovies = async () => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWNhMDg3ZTE0MDM3M2E1NzY2ZTQ3YjI0OTJhODRkNyIsIm5iZiI6MTczMzI5MTI1Ni4yNTksInN1YiI6IjY3NGZlY2Y4NjU2NzAyYTc5MmZmYWRhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._xjH8K_4RrKCmdFhrJhCx1_Dd8ZUM5rzZ82Etl2XZT4",
  //     },
  //   };

  //   fetch(
  //     "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  //     options
  //   )
  //     .then((res) => res.json())
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  // };

  const getMovies = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWNhMDg3ZTE0MDM3M2E1NzY2ZTQ3YjI0OTJhODRkNyIsIm5iZiI6MTczMzI5MTI1Ni4yNTksInN1YiI6IjY3NGZlY2Y4NjU2NzAyYTc5MmZmYWRhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._xjH8K_4RrKCmdFhrJhCx1_Dd8ZUM5rzZ82Etl2XZT4",
        },
      }
    );
    console.log(data.results.map((movie: any) => movie.poster_path));
  };
  //  https://image.tmdb.org/t/p/w500/yh64qw9mgXBvlaWDi7Q9tpUBAvH.jpg/
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <>d</>
    </>
  );
}

// 총 3개 연동
// now_playing 20개
// popular 20개
// upcoming 20개
//1. 썸네일은 poster_path
//
