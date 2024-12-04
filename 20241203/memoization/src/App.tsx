import { useMemo, useState } from "react";
import A from "./components/A";
import { initialItems } from "./utils/utils";

export default function App() {
  console.log("App Rendering");
  const [count, setCount] = useState(0);
  const selectedItems = useMemo(
    () => initialItems.find((item) => item.selected),
    []
  );
  return (
    <>
      <h1>
        APP: {count} / {selectedItems?.id}
      </h1>
      <button onClick={() => setCount((count) => count + 1)}>App 증가</button>
      <A />
    </>
  );
}
