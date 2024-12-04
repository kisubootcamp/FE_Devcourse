import { star } from "../assets/assets";

export default function MovieItem({ movie }: { movie: Movie }) {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      {/* 아이템 1개 */}
      <div>
        <img
          src={baseURL + movie.poster_path}
          alt=""
          className="w-full rounded-md"
        />
        <div className="flex items-center justify-between mt-4 mb-2 text-lg font-bold">
          <h4 className="">{movie.title}</h4>
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
            <span className="text-yellow-500">
              {movie.vote_average.toFixed(2)}
            </span>
          </div>
          <span className="font-bold text-yellow-500">
            {movie.release_date.slice(0, 4)}
          </span>
        </div>
      </div>
    </>
  );
}
