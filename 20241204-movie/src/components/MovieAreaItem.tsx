import { star } from '../assets/assets';

export default function MovieAreaItem({
  key,
  movie,
}: {
  key: number;
  movie: Movie;
}) {
  return (
    <div>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : '/fallback.jpg'
        }
        alt={movie.original_title}
        className='rounded-md w-full'
      />
      <div className='flex justify-between items-center font-bold mt-4 mb-2 text-lg'>
        <h4 className=''>{movie.original_title}</h4>
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
  );
}
