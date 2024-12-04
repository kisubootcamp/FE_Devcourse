import { star } from "../../assets/assets";
import { BASE_IMG_URL } from "../../utils/constants";

export default function MovieCard(props: IMovieCardProps) {
  const { poster_path, title, vote_average, release_date } = props;
  return (
    <div>
      <img
        src={`${BASE_IMG_URL}/${poster_path}`}
        alt=""
        className="w-full rounded-md"
      />
      <div className="flex items-center justify-between mt-4 mb-2 text-lg font-bold">
        <h4 className="">{title}</h4>
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
          <span className="text-yellow-500">{vote_average}</span>
        </div>
        <span className="font-bold text-yellow-500">{release_date}</span>
      </div>
    </div>
  );
}
