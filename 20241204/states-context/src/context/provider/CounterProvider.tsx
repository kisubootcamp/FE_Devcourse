import { useMemo, useState } from 'react';
import { CounterActionContext, CounterContext } from '../CounterContext';

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

  // 참조 값을 전부 메모 -> count도 메모이제이션 되어 값이 바뀌지 않는 것을 확인할 수 있음
  // -> 컨텍스트를 분리
  const memo = useMemo(() => ({ increment, decrement, reset }), []);

  // value는 한 개의 데이터만 제공할 수 있음
  // 제공하고 싶은 데이터가 여러 개라면 객체로 묶어 제공
  return (
    <CounterActionContext.Provider value={memo}>
      <CounterContext.Provider value={{ count }}>
        {children}
      </CounterContext.Provider>
    </CounterActionContext.Provider>
  );
}
