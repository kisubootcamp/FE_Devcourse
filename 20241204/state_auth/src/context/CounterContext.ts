import { createContext } from "react";

export const CounterContext = createContext<CounterContextType | null>(null);

export const CounterActionContext =
  createContext<CounterActionContextType | null>(null);
