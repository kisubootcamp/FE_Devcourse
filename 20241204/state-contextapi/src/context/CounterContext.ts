import { createContext } from "react";

export const CounterContext = createContext<CounterContextType | null>(null);
//createContext 매개변수에 초기데이터를 적어야 함 but, 뭘 제공해야 좋을지 몰라서 null을 준비했어(임시)
export const CounterActionContext =
  createContext<CounterActionContextType | null>(null);
