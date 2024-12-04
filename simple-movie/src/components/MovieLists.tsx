import { useEffect, useState } from "react";
import MovieBox from "./MovieBox";
import { getMovie } from "../api/getMovie";

interface MovieListsType {
  categoryName: string;
}

export default function MovieLists({ categoryName }: MovieListsType) {
  const [data, setData] = useState<MovieInfoType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMovie = async () => {
    try {
      const response = await getMovie(categoryName);
      console.log(response);
      setData(response);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (error) {
    return <h1>오류!</h1>;
  }

  return (
    <section className="container mx-auto py-8 text-white">
      <span className="text-yellow-600">ONLINE STREAMING</span>
      <h2 className="text-[36px] font-bold mb-8">{categoryName}</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
        {/* 아이템 1개 */}
        {!isLoading && data ? (
          data.results.map((item) => {
            return (
              <MovieBox
                key={item.id}
                title={item.title}
                vote_average={item.vote_average}
                release_date={item.release_date}
                poster_path={item.poster_path}
              />
            );
          })
        ) : (
          <h1>로딩중</h1>
        )}
      </div>
    </section>
  );
}
