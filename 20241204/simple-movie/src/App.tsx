import { useEffect } from "react";
import { banner_bg01 } from "./assets/assets";
import MovieList from "./components/MovieList";
import { useMovieStore } from "./store/movieStore";
import { getNowPlaying, getTopRated, getUpcoming } from "./apis/apis";

export default function App() {
  const nowPlaying = useMovieStore((state) => state.nowPlaying);
  const setNowPlaying = useMovieStore((state) => state.setNowPlaying);
  const upcoming = useMovieStore((state) => state.upcoming);
  const setUpcoming = useMovieStore((state) => state.setUpcoming);
  const topRated = useMovieStore((state) => state.topRated);
  const setTopRated = useMovieStore((state) => state.setTopRated);
  const setIsLoading = useMovieStore((state) => state.setIsLoading);

  const getMovies = async () => {
    setIsLoading(true);
    const np = await getNowPlaying();
    setNowPlaying(np.results);
    const uc = await getUpcoming();
    setUpcoming(uc.results);
    const tr = await getTopRated();
    setTopRated(tr.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
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
              TVs SHows, & <span className="text-rose-500">Infinite</span>
            </h2>
            <p className="text-xl sm:text-2xl">
              An activity where all the movies in the world come together
            </p>
          </div>
        </section>
      </article>
      {/* 무비 에어리어 */}
      <article className="bg-black py-10 px-4 xs:px-0">
        <MovieList title="Now Playing" movies={nowPlaying} />
        <MovieList title="Upcoming" movies={upcoming} />
        <MovieList title="Top Rated" movies={topRated} />
      </article>
    </>
  );
}
