import Header from "./components/Header";
import MovieArea from "./components/MovieArea";
import PageDescription from "./PageDescription";

export default function App() {
  return (
    <>
      <Header />
      <PageDescription />
      <MovieArea
        category="Now playing"
        apiEndPoint="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
      />
      <MovieArea
        category="Popular"
        apiEndPoint="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
      />
      <MovieArea
        category="Upcoming"
        apiEndPoint="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
      />
    </>
  );
}
