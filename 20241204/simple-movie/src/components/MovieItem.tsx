import { star } from "../assets/assets";
type MovieItemType = {
  thumbnail: string;
  title: string;
  rate: number;
  released: string;
};
export default function MovieItem({
  thumbnail,
  title,
  rate,
  released,
}: MovieItemType) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${thumbnail}`}
        alt=""
        className="rounded-md w-full h-[357px]"
      />
      <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
        <h4 className="">{title}</h4>
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
          <span className="text-yellow-500">{rate}</span>
        </div>
        <span className="text-yellow-500 font-bold">
          {released.slice(0, 4)}
        </span>
      </div>
    </div>
  );
}
