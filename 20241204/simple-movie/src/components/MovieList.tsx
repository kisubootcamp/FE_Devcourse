import { useMovieStore } from "../store/movieStore";
import MovieItem from "./MovieItem";
import Skeleton from "./Skeleton";

export default function MovieList({
  title,
  movies,
}: {
  title: string;
  movies: MovieItemType[];
}) {
  const isLoading = useMovieStore((state) => state.isLoading);
  const isError = useMovieStore((state) => state.isError);

  if (isLoading || isError) {
    const dummy = new Array(20).fill(0);
    return (
      <section className="container mx-auto py-8 text-white">
        <span className="text-yellow-600">ONLINE STREAMING</span>
        <h2 className="text-[36px] font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
          {dummy.map((_) => (
            <Skeleton />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto py-8 text-white">
      <span className="text-yellow-600">ONLINE STREAMING</span>
      <h2 className="text-[36px] font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
        {movies?.map((movie) => (
          <MovieItem
            key={movie.id}
            thumbnail={movie.poster_path}
            title={movie.title}
            rate={movie.vote_average}
            released={movie.release_date}
          />
        ))}
      </div>
    </section>
  );
}
