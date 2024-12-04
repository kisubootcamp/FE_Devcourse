import { useEffect, useState } from "react";
import { getNowPlayingMovies } from "../utils";
import star from "../assets/star.svg";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  popularity: number;
  genres: { id: number; name: string }[];
  release_date: string;
  vote_average: number;
}

interface Props {
  apiCall?: () => Promise<{results: Movie[]}>;
}

export default function Nowplay({apiCall = getNowPlayingMovies}: Props) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try{
        const movieData = await apiCall();
        setMovies(movieData.results);
      } catch {
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <article className='bg-black py-10 px-4 xs:px-0'>
        <section className='container mx-auto py-8 text-white'>
          <span className='text-yellow-600'>ONLINE STREAMING</span>
          <h2 className='text-[36px] font-bold mb-8'>Now Playing</h2>
          <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0'>
            {/* 영화 목록 */}
            {movies.length > 0 ? (
            movies.map((movie) => (  
              <div key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className='rounded-md w-full'
                />
                <div className='flex justify-between items-center font-bold mt-4 mb-2 text-lg'>
                  <h4>{movie.title}</h4>
                </div>
                <div className='flex justify-between items-center text-sm text-gray-200'>
                  <div className='flex items-center gap-2 font-bold'>
                    <img
                      src={star}
                      alt='star'
                      width={18}
                      height={18}
                      className='object-contain'
                    />
                    <span className='text-yellow-500'>{movie.vote_average}</span>
                  </div>
                  <span className='text-yellow-500 font-bold'>{movie.release_date}</span>
                </div>
              </div>
            ))
          ) : (
            <div>Loading...</div> 
          )}
          </div>
        </section>
      </article>
    </>
  )
}
