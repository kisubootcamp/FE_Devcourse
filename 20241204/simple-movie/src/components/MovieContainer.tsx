import { useEffect, useState } from "react";
import Movie from "./Movie";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/movie";
const QUERY_STRING = "language=ko-KR&page=1";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzEzMWY0YjVkMDNiZGExZDk1NWFkODNhZmM3NjQ2NCIsIm5iZiI6MTY3Mzg2Mjc4Mi41NzMsInN1YiI6IjYzYzUxZTdlYTY3MjU0MDA4NzE4YzhiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4dEegbZFSOUMmHP-pqBVJzbr1ASaV2WGueEL94n8ls",
  },
};

const convertTitleToURI = (title: TitleType) => {
  switch (title) {
    case "Now Playing":
      return `${BASE_URL}/now_playing?${QUERY_STRING}`;
    case "Popular":
      return `${BASE_URL}/popular?${QUERY_STRING}`;
    case "Upcoming":
      return `${BASE_URL}/upcoming?${QUERY_STRING}`;
  }
};

export default function MovieContainer({ title }: MovieContainerProps) {
  const [movies, setMovies] = useState<MovieType[]>([]);

  const getMovies = async () => {
    const uri = convertTitleToURI(title);
    const { data } = await axios.get(uri, options);
    setMovies(data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <article className="bg-black py-10 px-4 xs:px-0">
      <section className="container mx-auto py-8 text-white">
        <span className="text-yellow-600">ONLINE STREAMING</span>
        <h2 className="text-[36px] font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
          {/* 아이템 1개 */}
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
              poster_path={movie.poster_path}
            />
          ))}
        </div>
      </section>
    </article>
  );
}
