import Header from "./components/Header";
import Main from "./components/Main";
import MovieContainer from "./components/MovieContainer";

export default function App() {
  return (
    <>
      {/* 헤더 */}
      <Header />
      {/* 메인 */}
      <Main />
      {/* 무비 에어리어 */}
      <MovieContainer title="Now Playing" />
      <MovieContainer title="Popular" />
      <MovieContainer title="Upcoming" />
    </>
  );
}
