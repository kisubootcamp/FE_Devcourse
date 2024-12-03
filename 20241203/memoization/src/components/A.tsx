import { useCallback, useState } from "react";
import B from "./B";

export default function A() {
  console.log("A");

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <div>
      <h1>A</h1>
      <button onClick={increment}>A증가{count}</button>
      <button onClick={() => setCount2((prev) => prev + 1)}>
        count2증가{count2}
      </button>
      <B count2={count2} increment={increment} setCount1={setCount} />
    </div>
  );
}
