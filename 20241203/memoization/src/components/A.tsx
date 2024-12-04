import { useState, useCallback } from "react";
import B from "./B";

const A = () => {
  console.log("A Rendering");
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, [count]);

  return (
    <div>
      <h1>
        A: {count} / {count2}
      </h1>
      <button onClick={increment}>count 증가</button>
      <button onClick={() => setCount2((count) => count + 1)}>
        count2 증가
      </button>
      <B count2={count2} />
    </div>
  );
};

export default A;
