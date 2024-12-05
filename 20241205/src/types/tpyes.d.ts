interface NowPlayingMovie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}
interface NowPlayingResponse {
  results: NowPlayingMovie[];
}

interface NowList {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}
[];

interface TopList {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}
[];
interface TopListMovie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}
interface TopListResponse {
  results: TopListMovie[];
}

interface Upcoming {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}
[];
interface UpcomingMovie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}
interface UpcomingResponse {
  results: TopListMovie[];
}
