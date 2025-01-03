import { useEffect, useState } from "react";
import { star } from "../assets/assets";
import { axiosInstance } from "../api/axios";

const NowPlayingMovies = () => {
  const [movies, setMovies] = useState<MovieItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(
          "/now_playing?language=en-US&page=1"
        );
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        setIsError(true);
        console.log("Error: Now Playing Movies");
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (isError) return <p>Error occurred.</p>;

  return (
    <section className="container mx-auto py-8 text-white">
      <span className="text-yellow-600">NOW PLAYING</span>
      <h2 className="text-[36px] font-bold mb-8">Now Playing</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
        {movies.map((movie: MovieItem) => (
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

export default NowPlayingMovies;
