// Context 객체를 만든다.
import { createContext } from "react";
interface CounterContextType {
  count: number;
}

interface CounterActionContextProps {
  plus: () => void;
  reset: () => void;
  minus: () => void;
}

export const CounterContext = createContext<CounterContextType | null>(null);
export const CounterActionContext =
  createContext<CounterActionContextProps | null>(null);
// Context Provider를 만든다.

// Context Consumer를 만든다.
