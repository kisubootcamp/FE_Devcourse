import MovieArea from "./components/MovieArea";
import MovieHeader from "./components/MovieHeader";
import MovieMain from "./components/MovieMain";
import { useEffect, useState } from "react";
import { axiosInstance } from "./api/axios";

export default function App() {
  const [nowPlaying, setNowPlaying] = useState<MovieItem[]>([]);
  const [popular, setPopular] = useState<MovieItem[]>([]);
  const [upComing, setUpComing] = useState<MovieItem[]>([]);

  const getMovieNowPlaying = async () => {
    const {
      data: { results },
    } = await axiosInstance.get("/now_playing");
    setNowPlaying(results);
  };

  const getMoviePopular = async () => {
    const {
      data: { results },
    } = await axiosInstance.get("/popular");
    setPopular(results);
  };

  const getMovieUpComing = async () => {
    const {
      data: { results },
    } = await axiosInstance.get("/upcoming");
    setUpComing(results);
  };

  useEffect(() => {
    getMovieNowPlaying();
    getMoviePopular();
    getMovieUpComing();
  }, []);

  return (
    <>
      <MovieHeader />
      <MovieMain />
      <MovieArea movies={nowPlaying} title="Now Playing" />
      <MovieArea movies={popular} title="Popular" />
      <MovieArea movies={upComing} title="upComing" />
    </>
  );
}
