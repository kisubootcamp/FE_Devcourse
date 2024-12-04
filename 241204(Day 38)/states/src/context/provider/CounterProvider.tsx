import { useMemo, useState } from "react";
import { CounterActionContext, CounterContext } from "../CounterContext";

// CounterContext 컨텍스트 안에 Provider라는 속성이 있는 것
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
  // 자바스크립트는 키와 값이 같은 식별자면 하나로 생략할 수 있다
  const memo = useMemo(() => ({ increment, decrement, reset }), []);

  return (
    <CounterActionContext.Provider value={memo}>
      <CounterContext.Provider value={{ count }}>
        {children}
      </CounterContext.Provider>
    </CounterActionContext.Provider>
  );
}
