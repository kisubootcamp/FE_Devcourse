import { createContext } from "react";

// context 객체
// 무슨 데이터를 넣을지 몰라서 null을 넣었다.

export const CounterContext = createContext<CounterContextType | null>(null);
export const CounterActionContext =
  createContext<CounterActionContextType | null>(null);
