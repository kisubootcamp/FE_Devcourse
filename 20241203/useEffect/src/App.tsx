import { useEffect, useState } from "react";
import Count from "./components/Count";

export default function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {clicked && <Count />}
      <button onClick={() => setClicked(!clicked)}>클릭</button>
    </>
  );
}
