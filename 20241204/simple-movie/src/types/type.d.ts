interface MovieType {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: number;
}
type MovieName = "Now Playing" | "Popular" | "Top Rated";

interface MoviesProps {
  url: string;
  movieName: MovieName;
}
