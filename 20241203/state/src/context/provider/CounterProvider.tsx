import { useMemo, useState } from "react";
import { CounterActionContext, CounterContext } from "../CounterContext";

export default function CounterProvider({
  children, // 이 컴포넌트의 자식들은
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((e) => e + 1);
  };
  const decrement = () => {
    setCount((e) => e - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const memo = useMemo(
    () => ({
      increment,
      decrement,
      reset,
    }),
    []
  );
  return (
    <CounterActionContext.Provider value={memo}>
      <CounterContext.Provider value={{ count }}>
        {children}
      </CounterContext.Provider>
    </CounterActionContext.Provider>
    // CounterContext라는 같은 실행 컨텍스트에 포함하게 만듬
  );
}
