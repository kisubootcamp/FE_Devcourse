// React.memo()  고차함수, 컴포넌트를 반환하는 함수

import { useMemo, useState } from "react";
import A from "./components/A";
import { initalItems } from "./utils/utils";

// useCallback()
// useMemo()

export default function App() {
  console.log("app");
  const [count, setCount] = useState(0);
  const selectedItems = useMemo(
    () => initalItems.find((item) => item.selected),
    []
  );

  return (
    <>
      <h1>
        App: {count}/{selectedItems?.id}
      </h1>
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>
      <A />
    </>
  );
}
