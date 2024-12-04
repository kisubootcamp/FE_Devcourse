import Header from "./components/header/Header";
import Main from "./components/main/Main";
import MovieArea from "./components/movieArea/MovieArea";
import { useEffect, useState } from "react";
import { getNowPlaying, getPopular, getUpcoming } from "./api/api";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState({
    nowPlaying: null,
    popular: null,
    upcoming: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [nowPlayingRes, popularRes, upcomingRes] = await Promise.all([
          getNowPlaying(),
          getPopular(),
          getUpcoming(),
        ]);

        setMovieData({
          nowPlaying: nowPlayingRes,
          popular: popularRes,
          upcoming: upcomingRes,
        });
      } catch (error) {
        console.error("Failed to fetch movie data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <Main />
      <MovieArea data={movieData.nowPlaying!} listTitle={"Now Playing"} />
      <MovieArea data={movieData.popular!} listTitle={"Popular"} />
      <MovieArea data={movieData.upcoming!} listTitle={"Upcoming"} />
    </>
  );
}
