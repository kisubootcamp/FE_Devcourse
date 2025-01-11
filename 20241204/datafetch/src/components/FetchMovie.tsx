import axios from "axios";
import { useEffect } from "react";

export default function FetchMovie() {
  const getMovie = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      // option 객체도 전달받음
      {
        method: "GET", // 대문자로 적어야 함
        headers: {
          accept: "application/json",
          // 인증값 jwt 토큰 (각자 고유함)
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTFjMDBhYmM1MmI1OWRmYWI4NWM5YzQ1OWViNDRhOSIsIm5iZiI6MTczMzI5MTQ1OC44MSwic3ViIjoiNjc0ZmVkYzI1Zjc0NGJmMTc0MWRmOGE2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.oY5m2A9SZnGpt-EPxtlpoj6Odp05nW4QlMsc9lydtPQ",
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
