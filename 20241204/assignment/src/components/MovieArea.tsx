import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";

interface MovieAreaProps {
  apiEndPoint: string;
  category: string;
}

export default function MovieArea({ category, apiEndPoint }: MovieAreaProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getMovies = async () => {
    try {
      const response = await fetch(apiEndPoint, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWY5OGU5YmUwNDc1Mzg3OWNjMzI2Y2E4OWU5ODkyYSIsIm5iZiI6MTczMzMzOTIzOS4wNzksInN1YiI6IjY3NTBhODY3NWFjZTk4YmE0NmQ0ODAxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wqHT8qxlPk5CKq0p1dNdH5BirBRvqxDINtncdfwU38A",
        },
      });
      const data = await response.json();

      setMovies(data.results);
      setLoading(false);
    } catch {
      console.log("영화들을 가져오는 데에 실패하였습니다. ☠️");
      setLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (loading) {
    return <h1>Please wait 🙏</h1>;
  }
  if (isError) {
    return <h1>❗Error❗</h1>;
  }

  return (
    <article className="px-4 py-10 bg-black xs:px-0">
      <section className="container py-8 mx-auto text-white">
        <span className="text-yellow-600">ONLINE STREAMING</span>
        <h2 className="text-[36px] font-bold mb-8">{category}</h2>
        <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-4 sm:px-0">
          {/* 아이템 1개 */}
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </article>
  );
}
