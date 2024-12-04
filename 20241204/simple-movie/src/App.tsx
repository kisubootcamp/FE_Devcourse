import Header from "./components/Header";
import Main from "./components/Main";
import MovieArea from "./components/MovieArea";

export default function App() {
  const movieCategories = [
    {
      title: "Now Playing",
      apiUrl: "now_playing",
    },
    {
      title: "Popular",
      apiUrl: "popular",
    },
    {
      title: "Upcommig",
      apiUrl: "upcoming",
    },
  ];

  return (
    <>
      {/* 헤더 */}
      <Header />
      {/* 메인 */}
      <Main />
      {/* 무비 에어리어 */}
      {movieCategories.map((movieCategorie, i) => (
        <MovieArea key={i} movieCategorie={movieCategorie} />
      ))}
    </>
  );
}
