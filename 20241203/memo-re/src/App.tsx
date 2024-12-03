import CompoA from "./components/CompoA";
import { initialItems } from "./utils/utils";
import { useMemo } from "react";

function App() {
  const selectedItem = useMemo(
    () => initialItems.find((item) => item.selected),
    []
  );
  return (
    <>
      <p>{selectedItem?.id}</p>
      <CompoA />
    </>
  );
}

export default App;
