import { star } from "../assets/assets";
import { IMAGE_BASE_URL } from "../constants/constant";

interface MovieItemProps {
  title: string;
  posterPath: string;
  releaseDate: string;
  voteAverage: number;
}

export default function MovieItem({
  title,
  posterPath,
  releaseDate,
  voteAverage,
}: MovieItemProps) {
  return (
    <div>
      <img
        src={`${IMAGE_BASE_URL}${posterPath}`}
        alt=""
        className="rounded-md w-full"
      />
      <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
        <h4 className="line-clamp-1">{title}</h4>
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
          <span className="text-yellow-500">{voteAverage.toFixed(1)}</span>
        </div>
        <span className="text-yellow-500 font-bold">
          {releaseDate.slice(0, 4)}
        </span>
      </div>
    </div>
  );
}
