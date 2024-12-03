// 1. Context 객체를 만든다.
import { createContext } from "react";
interface CounterContextType {
  count: number;
}

interface CounterActionContextType {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// 상태를 정의할수없어서 null로 넣어둔것이다.

// 공급하는 데이터 분리
export const CounterContext = createContext<CounterContextType | null>(null);
export const CounterActionContext =
  createContext<CounterActionContextType | null>(null);

// 2. Context Provider를 만든다.
// context 범위를 만든다
// 3. Context Consumer를 만든다.
