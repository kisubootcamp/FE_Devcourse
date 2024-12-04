import { useEffect, useState } from "react";
import { API_OPTIONS, API_URL } from "../constants/constant";
import MovieItem from "./MovieItem";

interface MovieType {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export default function MovieList({ type }: { type: string }) {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const apiType = type.toLowerCase().replace(" ", "_");

  const getMovies = async () => {
    try {
      const json = await (
        await fetch(`${API_URL}${apiType}?language=en-US&page=1`, API_OPTIONS)
      ).json();
      setMovies(json.results);
      setLoading(false);
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="container mx-auto py-8 text-white">
      <span className="text-yellow-600">ONLINE STREAMING</span>
      <h2 className="text-[36px] font-bold mb-8">{type}</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
        {loading && <p>Loading...</p>}
        {error && <p>An Error occured</p>}
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
          />
        ))}
      </div>
    </section>
  );
}
