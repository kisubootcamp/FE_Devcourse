import { useMemo, useState } from "react";
import { initialItems } from "./utils/utils";
import A from "../components/A";
const App = () => {
  console.log("App Rendering");
  const [count, setCount] = useState(0);

  // 불필요한 연산을 만들어준 것
  // 3000만개의 배열 데이터를 렌더링 마다 재생성하고 있음
  const [items] = useState(initialItems);

  const selectItems = useMemo(() => items.find((item) => item.selected), []);

  return (
    <>
      <h1>
        App: {count} / {selectItems?.id}
      </h1>
      <button onClick={() => setCount((count) => count + 1)}>App 증가</button>
      <A />
    </>
  );
};
export default App;
