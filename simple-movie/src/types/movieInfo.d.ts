interface MovieInfoType {
  date?: { maximum: string; minimun: string };
  page: number;
  results: MovieDetailType[];
  total_pages: number;
  total_results: number;
}

interface MovieDetailType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieBoxType {
  poster_path: string;
  vote_average: number;
  title: string;
  release_date: string;
}
