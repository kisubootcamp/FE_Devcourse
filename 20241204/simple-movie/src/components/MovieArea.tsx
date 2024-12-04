import { MOVIE_TYPE } from "../constants/constant";
import MovieList from "./MovieList";

export default function MovieArea() {
  return (
    <article className="bg-black py-10 px-4 xs:px-0">
      {MOVIE_TYPE.map((type) => (
        <MovieList key={type} type={type} />
      ))}
    </article>
  );
}
