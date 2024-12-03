//1. 컨텍스트 객체 생성

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
export const CounterActionContext =
  createContext<CounterActionContextType | null>(null);
//2. 컨텍스트 provider 생성

//3. 컨텍스트 consumer 생성
