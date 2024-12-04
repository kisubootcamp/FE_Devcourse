// // import { createContext } from "react";
// // // 컴포넌트를 컨텍스트 객체로 묶기 위해 만드는 것이다
// // export const CounterContext = createContext(null);
// // // 아직 어떤 값이 들어갈 지 모르기 때문에 초기값에 null을 넣어둠
// // // 여기까지는 컨텍스트만 만들어 둔 것
// // // 컴포넌트를 이용해서 위치를 지정해줘야 함
// // // provider폴더에 CounterProvider.tsx 파일을 만듦 (해당 파일 참고 -1)

// // 참고 -6
// // 컨텍스트 객체가 자동으로 null로 타입추론을 하고 있었던 것
// // 따라서 다음과 같이 바꿔 줘야 한다.
// import { createContext } from "react";
// interface CounterContextType {
//   count: number;
//   increment: () => void;
//   decrement: () => void;
//   reset: () => void;
// }

// export const CounterContext = createContext<CounterContextType | null>(null);
// // Provider에서 타입에러 사라짐
// // CountDisplay.tsx 참고 -7

// 참고 -11
// count를 따로 빼내서 다른 데이터와 컨텍스트를 분리시켜 줌
// CounterProvider.tsx 참고 -12
import { createContext } from "react";

interface CounterContextType {
  count: number;
}
interface CounterActionContextType {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const CounterContext = createContext<CounterContextType | null>(null);
export const CounterActionContext =
  createContext<CounterActionContextType | null>(null);
