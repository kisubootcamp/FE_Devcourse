//1. context 객체를 만든다.

import { createContext } from "react";

interface CounterActionContextType {
  count: number;
}

interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}
export const CounterContext = createContext<CounterContextType | null>(null);
export const CounterActionContext =
  createContext<CounterActionContextType | null>(null);

// 2. context provider를 만든다.
// 3. context consumer를 만든다.
