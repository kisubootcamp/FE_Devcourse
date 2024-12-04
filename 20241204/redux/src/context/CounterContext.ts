import { createContext } from "react";

type CounterContextType = {
  count: number;
};
type CounterActionContextType = {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  };
  

export const CounterContext = createContext<CounterContextType | null>(null);
export const CounterActionContext = createContext<CounterActionContextType | null>(null);
