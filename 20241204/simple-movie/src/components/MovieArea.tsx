import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

export default function MovieArea({
  movieCategorie,
}: {
  movieCategorie: movieCategorieType;
}) {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieCategorie.apiUrl}?language=en-US&page=1`,
        {
          method: "GET", //대문자
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      const data = await response.json();
      // console.log(data.results);
      //영화 데이터 필터
      const filterData = data.results.map((data: Movie) => ({
        id: data.id,
        title: data.title,
        release_date: data.release_date.slice(0, 4),
        vote_average: parseFloat(data.vote_average.toFixed(1)), //숫자
        poster_path: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
      }));

      //저장
      setNowPlaying(filterData);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <article className="bg-black py-10 px-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">{movieCategorie.title}</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
            {/* 아이템 */}
            {nowPlaying.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
