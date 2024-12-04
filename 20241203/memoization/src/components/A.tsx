import { useCallback, useState } from "react";
import B from "./B";

export default function A() {
  console.log("a");

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const plus = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <h1>
        A: {count} / {count2}
      </h1>
      <button onClick={plus}>click</button>
      <button onClick={() => setCount2(count + 1)}>click</button>
      <B plus={plus} />
    </>
  );
}
