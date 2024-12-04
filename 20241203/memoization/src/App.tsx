import { useMemo, useState } from "react";
import A from "./components/A";
import { initaialItems } from "./utils/utils";

export default function App() {
  console.log("App render");
  const selectedItems = useMemo(
    () => initaialItems.find((item) => item.selected),
    []
  );
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        App : {count}/{selectedItems?.id}
      </h1>
      <button onClick={() => setCount((count) => count + 1)}> App증가</button>
      <A />
    </>
  );
}
