import { star } from "../assets/assets";

export default function MovieItem({
  movie,
  key,
}: {
  movie: Movie;
  key: number;
}) {
  return (
    <div>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "/fallback.jpg"
        }
        alt={movie.original_title}
        className="w-full rounded-md"
      />
      <div className="flex items-center justify-between mt-4 mb-2 text-lg font-bold">
        <h4 className="">{movie.original_title}</h4>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-200">
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
        <span className="font-bold text-yellow-500">2022</span>
      </div>
    </div>
  );
}
