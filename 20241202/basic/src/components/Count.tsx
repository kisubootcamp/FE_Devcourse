import React, { useState } from "react";

export default function Count() {
  // 로컬상태를 정의하기 위한 훅
  // 장점 : 문법이 간단함 -> 언제든지 상태를 변경하는 로직을 바꿀 수 있음
  // 단점 : 상태가 업데이트되는 것을 예측 할 수가 없음
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <h1>Count:{count} </h1>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
