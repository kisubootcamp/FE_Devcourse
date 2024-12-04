import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";

export const IMG_URL = `https://image.tmdb.org`;

export default function Movies({ url, movieName }: MoviesProps) {
  const [movies, setMovies] = useState<MovieType[]>([]);

  const getData = async () => {
    const options = {
      method: "GET",
      params: { language: "ko-KR", page: "1", region: "KR" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDcwZDdhZGZlZWFhZDZlMTI4NmZiNDdiZGRhOTI5NCIsIm5iZiI6MTczMjk3OTc1Ni41Nywic3ViIjoiNjc0YjJjMmMwYTcwZjJhZDQ0OThmZTBhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.0ejySfMM2ij5DMtlmaDiPqrbWb387Ma-inFxX-5lhnw`,
      },
    };
    try {
      const { data } = await axios.get(url, options);
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="container mx-auto py-8 text-white">
      <span className="text-yellow-600">ONLINE STREAMING</span>
      <h2 className="text-[36px] font-bold mb-8">{movieName}</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
        {/* 아이템 1개 */}
        {movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </section>
  );
}
