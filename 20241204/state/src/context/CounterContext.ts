import { createContext } from "react";



export const CounterContext = createContext<CounterContextType | null>(null);
export const CounterActionContext =
  createContext<CounterActionContextType | null>(null);
// 컨텍스트 객체 선언 : () 안에 초기 데이터를 적어야함 -> 현재는 컨텍스트만 만든것임 어디에 컨텍스트를 넣을 건지 정하지않은 상태 이제 어디에 넣을건지 정하는 컴포넌트를 만들어야함

// 공급해주고 있는 데이터를 가져다 쓸때는 useContext 훅을 사용해서 쓰는것임 -> 클래스 컴포넌트시절에도 contextAPI는 있었고 그러나 문법이 어려웠으나 useContext 훅이 있게됨으로 사용이 간편하게 됨

