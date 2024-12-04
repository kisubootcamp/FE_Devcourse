import { star } from "../assets/assets";

const imgBaseURL = "https://image.tmdb.org/t/p/w500";

export default function Movie({
  poster_path,
  title,
  vote_average,
  release_date,
}: Omit<MovieType, "id">) {
  return (
    <div>
      <img
        src={imgBaseURL + poster_path}
        alt="영화 포스터 이미지"
        className="rounded-md w-full"
      />
      <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
        <h4 className="">{title}</h4>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-200">
        <div className="flex items-center gap-2 font-bold">
          <img src={star} alt="star" width={18} height={18} className="object-contain" />
          <span className="text-yellow-500">{vote_average}</span>
        </div>
        <span className="text-yellow-500 font-bold">
          {new Date(release_date).getFullYear()}
        </span>
      </div>
    </div>
  );
}
