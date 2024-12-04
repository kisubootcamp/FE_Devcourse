import { useState } from "react";
import Count from "./components/Count";

function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      {isShow && <Count />}
      <button type="button" onClick={() => setIsShow((prev) => !prev)}>
        체인지
      </button>
    </>
  );
}

export default App;
