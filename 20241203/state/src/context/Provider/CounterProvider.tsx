import { useMemo, useState } from "react";
import { CounterContext } from "../CounterContext";

export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // CounterProvider 컴포넌트가 리렌더링되면서 value의 데이터가 업데이트됨
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  // const memo = useMemo(
  //   () => ({
  //     increment,
  //     decrement,
  //     reset,
  //   }),
  //   []
  // );

  return (
    // 데이터를 공급하는  컨텍스트와 함수를 공급하는 컨텍스트를 따로만들어 분리!!
    // 이후 useMemo를 사용해 객체를  메모이제이션

    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
}
{
  /* <CounterActionContext.Provider value={memo}>
<CounterContext.Provider value={{ count }}>
  {children}
</CounterContext.Provider>
</CounterActionContext.Provider> */
}
