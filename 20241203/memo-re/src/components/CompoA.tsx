import { useCallback, useState } from "react";
import CompoB from "./CompoB";

export default function CompoA() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  console.log("A rendering");
  return (
    <>
      <h1>A</h1>
      <div>
        <div>{count}</div>
        <button onClick={() => setCount((prev) => prev + 1)}>A증가</button>
      </div>
      <CompoB increment={increment} />
    </>
  );
}
