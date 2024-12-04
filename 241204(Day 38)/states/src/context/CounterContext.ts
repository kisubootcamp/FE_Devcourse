import { createContext } from "react";
// 컴포넌트를 컨텍스트 객체로 묶기 위해 만드는 것이다

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
// 아직 어떤 값이 들어갈 지 모르기 때문에 초기값에 null을 넣어둠
