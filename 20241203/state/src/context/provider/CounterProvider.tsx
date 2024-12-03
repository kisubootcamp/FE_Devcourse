// 2. context provider를 만든다.
import { useMemo, useState } from "react";
import { CounterActionContext, CounterContext } from "../CounterContext";

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
      {/* value는 1개의 데이터만 공급 가능, 1개 이상이면 1개의 배열이나 객체로 묶어야 함 */}
      <CounterContext.Provider value={{ count }}>
        {children}
      </CounterContext.Provider>
    </CounterActionContext.Provider>
  );
}
