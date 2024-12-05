import Header from "./components/header";
import TitlePage from "./components/title_page";
import MovieArea from "./components/movie_area";
import TopRated from "./components/top_rated";
import Upcoming from "./components/upcoming";

export default function App() {
  return (
    <>
      {/* 헤더 */}
      <Header />
      {/* 메인 */}
      <TitlePage />
      {/* 무비 에어리어 */}
      <MovieArea />
      <TopRated />
      <Upcoming />
    </>
  );
}
