import { createContext } from "react";
interface CounterContextType {
  count: number;
}

interface CounterActionContextType {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}
export const CounterContext = createContext<CounterContextType | null>(null);

export const CounterActionContext =
  createContext<CounterActionContextType | null>(null);

// 컨텍스트 객체를 2개 만들어서 공급받는 걸 분리
// 컴포넌트를 바꿔도 리렌더링이 되는 건 똑같음
// 값 객체를 메모이제이션해줘야함
