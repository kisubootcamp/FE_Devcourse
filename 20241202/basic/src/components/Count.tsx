import { useState } from "react";

// useState는 로컬 상태를 정의하기 위한 훅(hook)

export default function Count() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <h1>Count</h1>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
