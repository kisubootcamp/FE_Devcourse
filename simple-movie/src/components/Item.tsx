import { star } from "../assets/assets";

export default function Item({ data }: DataType) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt=""
        className="w-full rounded-md"
      />
      <div className="flex items-center justify-between mt-4 mb-2 text-lg font-bold">
        <h4 className="">{data.title}</h4>
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
          <span className="text-yellow-500">{data.vote_average}</span>
        </div>
        <span className="font-bold text-yellow-500">{data.release_date}</span>
      </div>
    </div>
  );
}
