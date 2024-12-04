interface Movie {
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
}

interface MovieResponse {
  results: Movie[];
}

type MovieSectionProps = {
  title: string;
  api: string;
};
