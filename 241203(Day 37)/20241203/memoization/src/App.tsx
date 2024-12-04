import { useMemo, useState } from "react";
import A from "./components/A";
import { initaialItems } from "./utils/utils";
export default function App() {
  console.log("App Rendering");
  const [count, setCount] = useState(0);
  const selectedItems = useMemo(
    () => initaialItems.find((item) => item.selected),
    [count]
  );
  return (
    <>
      <h1>
        App: {count} / {selectedItems?.id}
      </h1>
      <button onClick={() => setCount((count) => count + 1)}>App 증가</button>
      <A />
    </>
  );
}
