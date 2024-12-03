// React.memo // 고차함수? 컴포넌트를 반환하는 함수

import { useState, useMemo } from "react";
import A from "./components/A";
import { initialItems } from "./utils/utils";

// useCallback()
// useMemo()

export default function App() {
  console.log("App rendering");
  const [count, setCount] = useState(0);
  const selectedItems = useMemo(
    () => initialItems.find((item) => item.selected),
    []
  );
  return (
    <>
      <h1>
        App {count}: {selectedItems?.id}
      </h1>
      <button onClick={() => setCount((count) => count + 1)}>App 증가</button>
      <A />
    </>
  );
}
