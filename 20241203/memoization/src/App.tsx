import { useMemo, useState } from "react";
import A from "./components/A";
import { initialItems } from "./utils/utils";

export default function App() {
  console.log("App rendering");
  const selectedItems = useMemo(
    () => initialItems.find((item) => item.slected),
    []
  );

  const [count, setCount] = useState(0);
  return (
    <>
      <h1>
        App count: {count} / {selectedItems?.id}
      </h1>
      <button onClick={() => setCount((prev) => prev + 1)}>App 증가</button>
      <A />
    </>
  );
}
