import axios from "axios";
import { useEffect } from "react";

export default function FetchMovie() {
  const getMovie = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        //  인증값, JWT 토큰(사용자마다 고유한 값)
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDcwZDdhZGZlZWFhZDZlMTI4NmZiNDdiZGRhOTI5NCIsIm5iZiI6MTczMjk3OTc1Ni41Nywic3ViIjoiNjc0YjJjMmMwYTcwZjJhZDQ0OThmZTBhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.0ejySfMM2ij5DMtlmaDiPqrbWb387Ma-inFxX-5lhnw",
      },
    };
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    console.log(data);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <div>FetchMovie</div>;
}
