// 1. Context 객체를 만든다.
import { createContext } from "react";

interface CountContextType {
  count: number;
}
interface CounterActionContextType {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const CounterContext = createContext<CountContextType | null>(null);
export const CounterActionContext = createContext<CounterActionContextType | null>(null);

// 2. Context Provider를 만든다.

// 3. Context Consumer를 만든다.
