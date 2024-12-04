import { useEffect, useState } from "react";
import axios from "axios";
import { star } from "../assets/assets";

const TopRatedMovies = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDkzYTllZTk2YzUwODlkMmYxNTNlNDdiOWU4YzBhYSIsIm5iZiI6MTczMzI5MTMwNS4xNjgsInN1YiI6IjY3NGZlZDI5NjU2NzAyYTc5MmZmYWRlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gD5df8vcuE6tgc2uX7CbOeZ5qYOo8OCxnksHYI_SvA4",
            },
          }
        );
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        setIsError(true);
        console.log("Error: TopRated Movies");
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (isError) return <p>Error occurred.</p>;

  return (
    <section className="container mx-auto py-8 text-white">
      <span className="text-yellow-600">TOP RATED</span>
      <h2 className="text-[36px] font-bold mb-8">Top Rated Movies</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
        {movies.map((movie: any) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-md w-full"
            />
            <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
              <h4>{movie.title}</h4>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-200">
              <div className="flex items-center gap-2 font-bold">
                <img
                  src={star}
                  alt="star"
                  width={18}
                  height={18}
                  className="object-contain"
                />
                <span className="text-yellow-500">{movie.vote_average}</span>
              </div>
              <span className="text-yellow-500 font-bold">
                {movie.release_date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedMovies;
