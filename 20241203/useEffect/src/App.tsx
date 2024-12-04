// useEffect
// 함수형 컴포넌트에서 생명주기를 다룰 때 사용하는 리액트 훅
// 생명주기 -> 컴포넌트가 렌더링되고, 화면에서 사라질 때까지(life cycle)

import { useState } from "react";
import Count from "./components/Count";

export default function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      {isShow && <Count />}
      <button onClick={() => setIsShow((prev) => !prev)}>click</button>
    </>
  );
}
