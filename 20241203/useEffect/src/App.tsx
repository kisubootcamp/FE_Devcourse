import { useState } from "react";
import Count from "./componets/Count";

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      {isShow && <Count />}
      <button onClick={() => setIsShow(!isShow)}>보이기/가리기</button>
    </>
  );
}
