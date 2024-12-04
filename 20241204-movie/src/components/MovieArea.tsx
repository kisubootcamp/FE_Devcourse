import axios from 'axios';

import { ReactNode, useEffect, useState } from 'react';
import MovieAreaItem from './MovieAreaItem';

export default function MovieArea({
  apiEndpoint,
  children,
}: {
  apiEndpoint: string;
  children: ReactNode;
}) {
  // 상태 관리
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Fetch
  const getMovies = async () => {
    try {
      const { data } = await axios.get<{ results: Movie[] }>(apiEndpoint, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjViMmU0YjNkNWJiOWEwNTViN2NmZWY3Y2IyMzIxYSIsIm5iZiI6MTczMzI5MTI1My4yNTIsInN1YiI6IjY3NGZlY2Y1ZmI3Mjk4YzExYTIxNjQ5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4xuEswm8yzNzpTr1TJDqE-HyLrl9Xfh3GWbMTao5qRI',
        },
      });
      setMovies(data.results);
      setLoading(false);
    } catch {
      setIsError(true);
      setLoading(false);
    }
  };

  // useEffect
  useEffect(() => {
    getMovies();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  return (
    <article className='bg-black py-10 px-4 xs:px-0'>
      <section className='container mx-auto py-8 text-white'>
        {children}
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0'>
          {movies.map((movie) => (
            <MovieAreaItem key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </article>
  );
}
