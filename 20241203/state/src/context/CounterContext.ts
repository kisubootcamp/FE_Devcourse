import { createContext } from "react";

interface CreateContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// interface CreateActionContextType {
//   increment: () => void;
//   decrement: () => void;
//   reset: () => void;
// }

// Context 객체 생성
export const CounterContext = createContext<CreateContextType | null>(null);

// export const CounterActionContext =
//   createContext<CreateActionContextType | null>(null);
