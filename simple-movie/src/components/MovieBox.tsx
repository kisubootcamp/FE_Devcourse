import { star } from "../assets/assets";

export default function MovieBox({
  title,
  vote_average,
  release_date,
  poster_path,
}: MovieBoxType) {
  const voteAverage = vote_average.toFixed(1);
  const releaseYear = release_date.split("-")[0];

  const backdropImg = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <div>
      <img src={backdropImg} alt="" className="rounded-md w-full" />
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
          <span className="text-yellow-500">{voteAverage}</span>
        </div>
        <span className="text-yellow-500 font-bold">{releaseYear}</span>
      </div>
    </div>
  );
}
