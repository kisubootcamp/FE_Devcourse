interface MovieContainerProps {
  title: TitleType;
}

interface MovieType {
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
}

type TitleType = "Now Playing" | "Popular" | "Upcoming";
