import { useMemo, useState } from "react";
import { CounterActionContext, CounterContext } from "../CounterContext";

export default function CounterProiveder({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const memo = useMemo(() => ({ increment, decrement, reset }), []);
  return (
    <>
      <CounterActionContext.Provider value={memo}>
        <CounterContext.Provider value={{ count }}>
          {children}
        </CounterContext.Provider>
      </CounterActionContext.Provider>
    </>
  );
}
