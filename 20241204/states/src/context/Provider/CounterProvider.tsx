// Contetxt 객체의 범위를 지정해주는 역할

import { useMemo, useState } from "react";
import { CounterActionContext, CounterContext } from "../CounterContext";

export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(0);
  };

  const memo = useMemo(() => {
    return {
      increment,
      decrement,
      reset,
    };
  }, []);
  return (
    //  Context  객체의 Provider 컴포넌트 반환
    // Context Provider로 데이터를 공유하며 컨텍스트 객체 범위 지정
    <CounterActionContext.Provider value={memo}>
      <CounterContext.Provider value={{ count }}>
        {children}
      </CounterContext.Provider>
    </CounterActionContext.Provider>
  );
}
