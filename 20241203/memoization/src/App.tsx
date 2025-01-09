import { useMemo, useState } from "react";
import A from "./componets/A";
import { initialItems } from "./utils/utils";

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
        App: {count} / {selectedItems?.id}
      </h1>
      <button onClick={() => setCount((count) => count + 1)}>App증가</button>
      <A />
    </>
  );
}
