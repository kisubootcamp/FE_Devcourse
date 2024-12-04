import { star } from "../../assets/assets";

export default function MovieList({
  poster_path,
  title,
  vote_average,
  release_date,
}: {
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="rounded-md w-full"
      />
      <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
        <h4 className="text-ellipsis overflow-hidden text-nowrap">{title}</h4>
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
          <span className="text-yellow-500">{vote_average}</span>
        </div>
        <span className="text-yellow-500 font-bold">
          {release_date.split("-")[0]}
        </span>
      </div>
    </div>
  );
}
