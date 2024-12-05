import BgImage from "./components/BgImage";
import Header from "./components/Header";
import Movies from "./components/Movies";

export const BASE_URL = `https://api.themoviedb.org/3`;
export default function App() {
  return (
    <>
      {/* 헤더 */}
      <Header />
      {/* 메인 */}
      <BgImage />
      {/* 무비 에어리어 */}
      <article className="bg-black py-10 px-4 xs:px-0">
        <Movies url={`${BASE_URL}/movie/now_playing`} movieName="Now Playing" />
        <Movies url={`${BASE_URL}/movie/popular`} movieName="Popular" />
        <Movies url={`${BASE_URL}/movie/top_rated`} movieName="Top Rated" />
      </article>
    </>
  );
}
