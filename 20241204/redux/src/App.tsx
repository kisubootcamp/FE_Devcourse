import AuthCheck from "./components/AuthCheck";
import CompoA from "./components/CompoA";
import { initialItems } from "./utils/utils";
import { useMemo } from "react";

function App() {
  // const selectedItem = useMemo(
  //   () => initialItems.find((item) => item.selected),
  //   []
  // );
  return (
    <>
      {/* <p>{selectedItem?.id}</p> */}
      <AuthCheck>
        <CompoA />
      </AuthCheck>
    </>
  );
}

export default App;
