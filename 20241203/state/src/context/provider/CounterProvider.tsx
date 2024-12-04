import { useMemo, useState } from "react";
import { CounterActionContext, CounterContext } from "../CounterContext";

export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount((prev) => prev + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const minus = () => {
    setCount((prev) => prev - 1);
  };

  const memo = useMemo(
    () => ({
      plus,
      minus,
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
  );
}
