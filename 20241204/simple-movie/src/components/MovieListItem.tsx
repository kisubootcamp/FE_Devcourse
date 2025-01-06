import { star } from "../assets/assets";
export default function MovieListItem({ data }: { data: movie }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        className="rounded-md w-full"
      />
      <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
        <h4 className="">{data.original_title}</h4>
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
          <span className="text-yellow-500">
            {data.vote_average.toFixed(1)}
          </span>
        </div>
        <span className="text-yellow-500 font-bold">
          {data.release_date.slice(0, 4)}
        </span>
      </div>
    </div>
  );
}