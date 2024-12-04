import MovieList from "./MovieList";

export default function MovieArea() {
  const baseURL = "https://api.themoviedb.org/3/movie";
  return (
    <article className="px-4 py-10 bg-black xs:px-0">
      <MovieList
        title={"Now Playing"}
        URL={baseURL + "/now_playing?language=ko-KR&page=1&region=KR"}
      />
      <MovieList
        title={"Upcoming"}
        URL={baseURL + "/upcoming?language=ko-KR&page=1&region=KR"}
      />
      <MovieList
        title={"Top Rated"}
        URL={baseURL + "/top_rated?language=ko-KR&page=1&region=KR"}
      />
    </article>
  );
}
