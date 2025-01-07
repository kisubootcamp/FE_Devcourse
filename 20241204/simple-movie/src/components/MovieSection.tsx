import { useEffect, useState } from "react";
import { star } from "../assets/assets";

export default function MovieSection({ title, api }: MovieSectionProps) {
  const [list, setList] = useState<MovieResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getMovie = async () => {
    try {
      const response = await fetch(
        `${api}$api_key=6e1c00abc52b59dfab85c9c459eb44a9`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTFjMDBhYmM1MmI1OWRmYWI4NWM5YzQ1OWViNDRhOSIsIm5iZiI6MTczMzI5MTQ1OC44MSwic3ViIjoiNjc0ZmVkYzI1Zjc0NGJmMTc0MWRmOGE2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.oY5m2A9SZnGpt-EPxtlpoj6Odp05nW4QlMsc9lydtPQ",
          },
        }
      );
      const data = await response.json();
      setList(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setIsError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, [api]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  if (!list) {
    return <h1>No data available</h1>;
  }

  return (
    <section className="container mx-auto py-8 text-white">
      <span className="text-yellow-600">ONLINE STREAMING</span>
      <h2 className="text-[36px] font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
        {list.results.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
                {movie.release_date.slice(0, 4)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
