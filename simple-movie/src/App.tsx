import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzdmZTMxZTA3NzAyMWIxZDYxOTA5NmQyMzI5N2MyNCIsIm5iZiI6MTczMzI5MTI0MC44MzYsInN1YiI6IjY3NGZlY2U4NmUxMDFkOTQ5MTFhNTUzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b6puO0wpMYwldJhPXFrm0M-iDZDn6AmQ8TRaoPPV2PY",
    },
  };

  const getNowPlayingMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      );
      const data = await response.json();
      setNowPlayingData(data.results);
      setNowPlayingMovieLoading(false);
    } catch {
      setnowPlayingMovieError(true);
    }
  };
  const getPopularMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      );
      const data = await response.json();
      setpopularData(data.results);
      setPopularMovieLoading(false);
    } catch {
      setpopularMovieError(true);
    }
  };
  const getTopRatedMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      );
      const data = await response.json();
      setTopRatedData(data.results);
      setTopRatedMovieLoading(false);
    } catch {
      setTopRatedMovieError(true);
    }
  };
  const getUpcomingMovie = async () => {
    try {
      const respone = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        options
      );
      const data = await respone.json();
      setUpcomingData(data.results);
      setUpcomingMovieLoading(false);
    } catch {
      setUpcomingMovieError(true);
    }
  };

  useEffect(() => {
    getNowPlayingMovie();
    getPopularMovie();
    getTopRatedMovie();
    getUpcomingMovie();
  }, []);
  const [nowPlayingData, setNowPlayingData] = useState(null);
  const [popularData, setpopularData] = useState(null);
  const [topRatedData, setTopRatedData] = useState(null);
  const [upcomingData, setUpcomingData] = useState(null);
  const [nowPlayingMovieLoading, setNowPlayingMovieLoading] = useState(true);
  const [nowPlayingMovieError, setnowPlayingMovieError] = useState(false);
  const [popularMovieLoading, setPopularMovieLoading] = useState(true);
  const [popularMovieError, setpopularMovieError] = useState(false);
  const [topRatedMovieLoading, setTopRatedMovieLoading] = useState(true);
  const [topRatedMovieError, setTopRatedMovieError] = useState(false);
  const [upcomingMovieLoading, setUpcomingMovieLoading] = useState(true);
  const [upcomingMovieError, setUpcomingMovieError] = useState(false);

  const props = [
    {
      lists: "Now Playing",
      data: nowPlayingData,
      loading: nowPlayingMovieLoading,
      error: nowPlayingMovieError,
    },
    {
      lists: "Popular",
      data: popularData,
      loading: popularMovieLoading,
      error: popularMovieError,
    },
    {
      lists: "Top Rated",
      data: topRatedData,
      loading: topRatedMovieLoading,
      error: topRatedMovieError,
    },
    {
      lists: "Upcoming",
      data: upcomingData,
      loading: upcomingMovieLoading,
      error: upcomingMovieError,
    },
  ];
  const prop = props.map((val) => (
    <Movie
      lists={val.lists}
      data={val.data}
      loading={val.loading}
      error={val.error}
    />
  ));
  return (
    <>
      <Header />
      <Main />
      {prop}
    </>
  );
}
