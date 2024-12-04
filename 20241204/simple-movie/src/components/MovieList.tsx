import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

export default function MovieList({ title, URL }: MovieListProps) {
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  const [movies, setMovies] = useState<Movie[] | []>([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
  const getMovieData = async () => {
    const response = await fetch(URL, options);
    const data = await response.json();
    setMovies(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <>
      <section className="container py-8 mx-auto text-white">
        <span className="text-yellow-600">ONLINE STREAMING</span>
        <h2 className="text-[36px] font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-4 sm:px-0">
          {movies?.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </>
  );
}
