import { createContext } from "react";

//1. 제공할 초기 데이터를 적게 되어있으나 아직 무슨 데이터 제공할지 몰라 null 입력
export const CounterContext = createContext<CounterContextType | null>(null);
export const CounterActionContext =
  createContext<CounterActionContextType | null>(null);
