import MovieCard from "./MovieCard";

export default function MovieArea({
  data,
  listTitle,
}: {
  data: INowPlaying[];
  listTitle: string;
}) {
  return (
    <article className="px-4 py-10 bg-black xs:px-0">
      <section className="container py-8 mx-auto text-white">
        <span className="text-yellow-600">TMDB BOX OFFICE</span>
        <h2 className="text-[36px] font-bold mb-8">{listTitle}</h2>
        <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-4 sm:px-0">
          {data?.map((item, idx: number) => (
            <MovieCard
              key={idx}
              poster_path={item.poster_path}
              title={item.title}
              vote_average={item.vote_average}
              release_date={item.release_date}
            />
          ))}
        </div>
      </section>
    </article>
  );
}
