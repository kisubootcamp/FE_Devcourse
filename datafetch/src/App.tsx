import Fetch from "./components/Fetch";
import FetchAxios from "./components/FetchAxios";
import FetchMovie from "./components/FetchMovie";

export default function App() {
  return (
    <div>
      {/* <Fetch /> */}
      <FetchAxios />
      <FetchMovie />
    </div>
  );
}
