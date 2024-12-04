type MoiveStoreType = {
  nowPlaying: MovieItemType[];
  upcoming: MovieItemType[];
  topRated: MovieItemType[];
  setNowPlaying: (movies: MovieItemType[]) => void;
  setUpcoming: (movies: MovieItemType[]) => void;
  setTopRated: (movies: MovieItemType[]) => void;

  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  isError: boolean;
  setIsError: (isError: boolean) => void;
};
