import { useEffect, useState } from "react";
import { banner_bg01, star } from "./assets/assets";

type DataType = {
  title: string;
  poster_path: string;
};

export default function App() {
  // 일단 API를 불러와야함
  // api에서 가져올것 -> 썸네일, title
  // useState 사용해서  로딩화면만들기
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // NowPlaying
  const getNowPlayingMovie = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=ko-US&page=1`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWU4NGY0MWI1ZWQ3Y2E5YTNiNDNkYTIyYWVjYmViZSIsIm5iZiI6MTczMzI5MTI3Ni4wOTUsInN1YiI6IjY3NGZlZDBjNmUxMDFkOTQ5MTFhNTU1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EbOC1YmXjLuqsB9moY4FdTPj4taHzNCKnyT5D9ctVZc",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getNowPlayingMovie();
  }, []);

  // Popular
  const getPopularMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWU4NGY0MWI1ZWQ3Y2E5YTNiNDNkYTIyYWVjYmViZSIsIm5iZiI6MTczMzI5MTI3Ni4wOTUsInN1YiI6IjY3NGZlZDBjNmUxMDFkOTQ5MTFhNTU1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EbOC1YmXjLuqsB9moY4FdTPj4taHzNCKnyT5D9ctVZc",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setPopularMovies(data.results);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getPopularMovie();
  }, []);

  // Top_rated
  const getTopRatedMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWU4NGY0MWI1ZWQ3Y2E5YTNiNDNkYTIyYWVjYmViZSIsIm5iZiI6MTczMzI5MTI3Ni4wOTUsInN1YiI6IjY3NGZlZDBjNmUxMDFkOTQ5MTFhNTU1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EbOC1YmXjLuqsB9moY4FdTPj4taHzNCKnyT5D9ctVZc",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setTopRatedMovies(data.results);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getTopRatedMovie();
  }, []);

  // Upcoming
  const getUpcomingMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWU4NGY0MWI1ZWQ3Y2E5YTNiNDNkYTIyYWVjYmViZSIsIm5iZiI6MTczMzI5MTI3Ni4wOTUsInN1YiI6IjY3NGZlZDBjNmUxMDFkOTQ5MTFhNTU1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EbOC1YmXjLuqsB9moY4FdTPj4taHzNCKnyT5D9ctVZc",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setTopRatedMovies(data.results);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUpcomingMovie();
  }, []);

  if (isLoading) {
    return <div className="p-4 text-2xl text-white">loading...</div>;
  }
  if (isError) {
    return <div className="p-4 text-2xl text-white">에러가 발생했습니다.</div>;
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
              TVs SHows, & <span className="text-rose-500">Infinite</span>
            </h2>
            <p className="text-xl sm:text-2xl">
              An activity where all the movies in the world come together
            </p>
          </div>
        </section>
      </article>
      {/* 무비 에어리어 */}
      {/* NowPlaying */}
      <article className="bg-black py-10 px-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">NowPlaying</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
            {movies.map((movie: DataType) => (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
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
                    <span className="text-yellow-500">9.1</span>
                  </div>
                  <span className="text-yellow-500 font-bold">2022</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
      {/*  Popular */}
      <article className="bg-black py-10 px-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">Popular</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
            {movies.map((movie: DataType) => (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
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
                    <span className="text-yellow-500">9.1</span>
                  </div>
                  <span className="text-yellow-500 font-bold">2022</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
      {/* Top Rated */}
      <article className="bg-black py-10 px-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">Top Rated</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
            {movies.map((movie: DataType) => (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
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
                    <span className="text-yellow-500">9.1</span>
                  </div>
                  <span className="text-yellow-500 font-bold">2022</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
      {/* Upcoming */}
      <article className="bg-black py-10 px-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">Upcoming</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
            {movies.map((movie: DataType) => (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
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
                    <span className="text-yellow-500">9.1</span>
                  </div>
                  <span className="text-yellow-500 font-bold">2022</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
