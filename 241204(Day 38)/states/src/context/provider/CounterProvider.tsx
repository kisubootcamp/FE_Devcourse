// // 참고 -1
// // 해당 파일은 CounterContext의 위치를 지정하는 역할을 함
// // 따라서 CounterContext.ts에서 만든 객체를 불러와서 사용해야 함
// import { CounterContext } from "../CounterContext";

// export default function CounterProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   // 컨텍스트에는 provider라는 속성이 있음
//   // 이걸로 데이터를 공급해줄 수 있음
//   // value라는 속성으로 공급

//   return (
//     <CounterContext.Provider value={null}>{children}</CounterContext.Provider>
//   );
// }
// // 만든 이후 어떤 범위에 컨텍스트 객체를 묶어 줄지 결정해야 함
// // App.tsx 참고 -2

// //
// // 참고 -5 Provider의 value에 공유하고 싶은 데이터를 공급하면 됨
// // value는 한 개의 데이터만 제공할 수 있음
// // 여러 개의 데이터를 제공하고 싶으면 객체로 묶어서 제공
// import { useState } from "react";
// import { CounterContext } from "../CounterContext";

// export default function CounterProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount((count) => count + 1);
//   };
//   const decrement = () => {
//     setCount((count) => count - 1);
//   };
//   const reset = () => {
//     setCount(0);
//   };
//   return (
//     // 공급하려는 데이터의 타입을 맞춰줘야 한다.
//     // 컨텍스트 객체를 만들어내는 곳에서 타입을 맞춰줘야 한다.
//     // CounterContext.ts 참고 -6

//     // 참고 -10
//     // 공급 받고 있는 데이터의 값이 계속 업데이트 되면서
//     // 이 값을 받는 모든 컴포넌트들이 리렌더링 되는 것!
//     // 이걸 메모이제이션 하기 위해 useMemo(()=>{{ count, increment, decrement, reset }})
//     // 이렇게 하면 count도 메모이제이션이 되면서 count조차 변경이 안 됨
//     // 이것을 해결하기 위해 컨텍스트 객체를 하나 더 만들어야 한다
//     // CountContext.ts에 컨텍스트를 하나 더 추가 참고 -11
// <CounterContext.Provider value={{ count, increment, decrement, reset }}>
//   {children}
// </CounterContext.Provider>
//   );
// }

// 참고 -12
import { useMemo, useState } from "react";
import { CounterActionContext, CounterContext } from "../CounterContext";

// CounterContext 컨텍스트 안에 Provider라는 속성이 있는 것
export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  // 자바스크립트는 키와 값이 같은 식별자면 하나로 생략할 수 있다
  // 메모이제이션이 되면 안 되는 count만 따로 분리하여 컨텍스트 각각 지정
  // buttons도 각각 지정 참고 -13
  const memo = useMemo(() => ({ increment, decrement, reset }), []);

  return (
    <CounterActionContext.Provider value={memo}>
      <CounterContext.Provider value={{ count }}>
        {children}
      </CounterContext.Provider>
    </CounterActionContext.Provider>
  );
}
