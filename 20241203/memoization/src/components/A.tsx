import { useCallback, useState } from "react";
import B from "./B";

export default function A() {
  console.log("A rendering");

  const [count2, setCount2] = useState(0);

  const increment = useCallback(() => {
    setCount2((count) => count + 1);
  }, []);

  return (
    <>
      <div>A: {count2}</div>
      <button onClick={increment}>count 증가버튼</button>

      <B setCount2={setCount2} />
    </>
  );
}
