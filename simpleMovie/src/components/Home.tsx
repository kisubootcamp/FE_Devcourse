
import Nowplay from "./Nowplay";
import Top from "./Top";
import Upcoming from "./Upcoming";

export default function Home() {
  return (
    <>
    {/* 무비 에어리어 */}
    <Nowplay/>
    <Top />
    <Upcoming />
  </>
  )
}
