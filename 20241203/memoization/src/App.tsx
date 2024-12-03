import { useMemo, useState } from "react";
import A from "./components/A";
import { initialItems } from "./utils/utils";
function App() {
  console.log("App");
  const selectedItems = useMemo(
    () => initialItems.find((item) => item.selected),
    []
  );
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{selectedItems?.id}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        APp증가{count}
      </button>
      <A />
    </>
  );
}

export default App;
