import MovieList from "./MovieList";

export default function MovieSection({
  Data,
  isError,
  MOVIE_LISTS,
}: {
  Data: DataType;
  isError: boolean;
  MOVIE_LISTS: string;
}) {
  return (
    <section className="container mx-auto py-8 text-white">
      <span className="text-yellow-600">ONLINE STREAMING</span>
      <h2 className="text-[36px] font-bold mb-8">{MOVIE_LISTS}</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
        {/* 아이템 1개 */}
        {isError ? (
          <div>요청오류</div>
        ) : (
          Data?.results.map((e) => (
            <MovieList
              poster_path={e.poster_path}
              vote_average={e.vote_average}
              release_date={e.release_date}
              title={e.title}
              key={e.id}
            />
          ))
        )}
      </div>
    </section>
  );
}
