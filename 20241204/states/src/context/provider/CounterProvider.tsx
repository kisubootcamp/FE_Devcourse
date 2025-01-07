import { useState } from "react";
import { CounterContext } from "../CounterContext";

// 1. CounterContext를 불러온다.
// 2. CounterContext.Provider의 value라는 속성으로 데이터 공급
// 3. 감쌀 요소를 지정하기 위해 children 지정(?)
export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
}
