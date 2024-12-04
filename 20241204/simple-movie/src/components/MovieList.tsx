import { useEffect, useState } from "react";
import MovieListItem from "./MovieListItem";
import axios from "axios";

export default function MovieList() {
  const [now, setNow] = useState<movie[]>([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTQ0ZGMzZmM0ZTcwZmJlNzlkOGQ3MzY0ZWJjNWQxOCIsIm5iZiI6MTcyMTk3NTA4OC4zOSwic3ViIjoiNjZhMzQxMzA3NDRmYjVmNTY5ODNjY2UyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.06VKxuZoIMAmFLsM8xN_VAYLC9LCPvI97W5rBsCA7Gk",
    },
  };
  const getNow = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    setNow(data.results);
  };

  const getUpcoming = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );
    setUpcoming(data.results);
  };

  const getTopRated = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    setTopRated(data.results);
  };
  useEffect(() => {
    getNow();
    getUpcoming();
    getTopRated();
  }, []);

  return (
    <article className="bg-black py-10 px-4 xs:px-0">
      {[now, upcoming, topRated].map((movie) => (
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">Movie LIST</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
            {movie.map((item) => (
              <MovieListItem data={item} />
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
