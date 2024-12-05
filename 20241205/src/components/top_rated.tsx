import { star } from "../assets/assets";
import { useEffect, useState } from "react";
import fetchTopRated from "../utils/fetchTopRated";

export default function TopRated() {
  const [movies, setMovies] = useState<TopList[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedMovies = await fetchTopRated();
        setMovies(fetchedMovies);
        setLoading(false);
      } catch (err) {
        setError("Something Went Wrong");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return <div className="text-white">Loading Top Rated Movies...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <article className="bg-black py-10 px-4 xs:px-0">
      <section className="container mx-auto py-8 text-white">
        <span className="text-yellow-600">TOP RATED</span>
        <h2 className="text-[36px] font-bold mb-8">Top Rated Movies</h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
          {movies.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-md w-full"
              />
              <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
                <h4 className="">{movie.title}</h4>
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
                  <span className="text-yellow-500">
                    {Math.round(movie.vote_average * 10) / 10}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
