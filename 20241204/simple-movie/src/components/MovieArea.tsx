import MovieSection from "./MovieSection";

export default function MovieArea() {
  return (
    <article className="bg-black py-10 px-4 xs:px-0">
      <MovieSection
        title="Now Playing"
        api="https://api.themoviedb.org/3/movie/now_playing?language=en-US"
      />
      <MovieSection
        title="Top Rated"
        api="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
      />
      <MovieSection
        title="Upcoming"
        api="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
      />
    </article>
  );
}
