import axios from "axios";
import { useEffect, useState } from "react";

export default function FetchMovie() {
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const options = {
      method: "GET", // 통신방식
      headers: {
        accept: "application/json", // 데이터를 JSON방식으로 받는다
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGIwODNmMDczNjY2M2I3OGM1OTUyZjNhYWI2YzhmMyIsIm5iZiI6MTczMzIyMzc5MS40NDgsInN1YiI6IjY3NGVlNTZmMmNlNGNlN2RkNjA5NTZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kTDq2EB375Lw-3tx5eeMR12u_BhoygIP5pq_KICZPnA",
      }, // JWT토큰으로 호출
    };

    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );

    setMovie(data);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500/yh64qw9mgXBvlaWDi7Q9tpUBAvH.jpg`}
        alt=""
      />
      {/* <div>{JSON.stringify(movie, null, 2)}</div> */}
    </>
  );
}
