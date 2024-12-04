import { useEffect, useState } from "react";
import { banner_bg01, star } from "./assets/assets";
import axios from "axios";

const VITE_API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/movie";

export default function App() {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const options = {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${VITE_API_KEY}`,
          },
        };

        const nowPlaying = await axios.get(
          `${BASE_URL}/now_playing?language=en-US&page=1`,
          options
        );
        setNowPlaying(nowPlaying.data.results);

        const popular = await axios.get(
          `${BASE_URL}/popular?language=en-US&page=1`,
          options
        );
        setPopular(popular.data.results);

        const upcoming = await axios.get(
          `${BASE_URL}/upcoming?language=en-US&page=1`,
          options
        );
        setUpcoming(upcoming.data.results);
      } catch (err) {
        setError("Failed to fetch movie data. Please try again.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const renderMovies = (movies: Movie[]) =>
    movies.map((movie) => (
      <div key={movie.id}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`Poster of ${movie.title}`}
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
            <span className="text-yellow-500">
              {movie.vote_average.toFixed(1)}
            </span>
          </div>
          <span className="text-yellow-500 font-bold">
            {movie.release_date?.split("-")[0]}
          </span>
        </div>
      </div>
    ));

  if (isLoading) {
    return <div className="text-white text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-10">{error}</div>;
  }

  return (
    <>
      {/* 헤더 */}
      <header className="absolute top-2 text-white w-full py-4 px-2">
        <div className="container mx-auto">
          <h1 className="text-3xl text-yellow-300 font-bold">SUFLIX</h1>
        </div>
      </header>

      {/* 메인 */}
      <article>
        <section
          className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center px-4"
          style={{ backgroundImage: `url(${banner_bg01})` }}
        >
          <div className="container mx-auto poppins text-white flex flex-col justify-center font-bold h-full">
            <h3 className="text-[18px] xs:text-[20px] sm:text-[30px] text-yellow-300">
              SUFLIX
            </h3>
            <h2 className="text-[25px] xs:text-[40px] sm:text-[60px] mb-4">
              Unlimited <span className="text-yellow-500">Movie</span>,
              <br />
              TVs Shows, & <span className="text-rose-500">Infinite</span>
            </h2>
            <p className="text-xl sm:text-2xl">
              An activity where all the movies in the world come together
            </p>
          </div>
        </section>
      </article>

      {/* 무비 에어리어 */}
      <article className="bg-black py-10 px-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">Now Playing</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
            {renderMovies(nowPlaying)}
          </div>
        </section>
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">POPULAR MOVIES</span>
          <h2 className="text-[36px] font-bold mb-8">Popular</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
            {renderMovies(popular)}
          </div>
        </section>
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">COMING SOON</span>
          <h2 className="text-[36px] font-bold mb-8">Upcoming</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
            {renderMovies(upcoming)}
          </div>
        </section>
      </article>
    </>
  );
}
