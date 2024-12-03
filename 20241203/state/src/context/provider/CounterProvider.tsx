import { useState, useMemo } from "react";
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

  const memo = useMemo(() => ({ increment, decrement, reset }), []);
  return (
    // children에 들어가는것은 같은 context로 묶인다.

    // context를 두개만들어서 중첩시켰다.
    <CounterActionContext.Provider value={memo}>
      <CounterContext.Provider value={{ count }}>
        {children}
      </CounterContext.Provider>
    </CounterActionContext.Provider>
  );
}
