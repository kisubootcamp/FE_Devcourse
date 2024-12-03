import { useState } from "react";
import Count from "./components/Count";

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      {isShow && <Count />}
      <button onClick={() => setIsShow(!isShow)}>체인지</button>
    </>
  );
}
