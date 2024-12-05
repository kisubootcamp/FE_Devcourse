import { IMG_URL } from "./Movies";
import { star } from "../assets/assets";

export default function Movie({ movie }: { movie: MovieType }) {
  return (
    <div>
      <img
        src={`${IMG_URL}/t/p/w500/${movie.poster_path}`}
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
          <span className="text-yellow-500">{movie.vote_average}</span>
        </div>
        <span className="text-yellow-500 font-bold">
          {movie.release_date.toString().slice(5)}
        </span>
      </div>
    </div>
  );
}
