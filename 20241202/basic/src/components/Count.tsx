import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Count: ${count}</div>
      <button onClick={() => setCount((prev) => prev - 1)}>감소</button>
      <button onClick={() => setCount(0)}>리셋</button>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
    </>
  );
}
