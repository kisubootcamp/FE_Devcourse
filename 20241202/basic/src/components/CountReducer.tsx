import { useReducer } from "react";
import { counterReducer } from "../reducer/countReducer";

export default function CountReducer() {
  // useReducer 로컬상태를 정의할 때 사용

  // const [상태(state), 액션발생함수(dispatch)] = useReducer(리듀서 함수, 초깃값)

  // 리듀서 함수 -> 상태를 업데이트하는 로직을 수행하는 함수

  // 장점: 상태 업데이트가 예측가능하다. 상태 업데이트하는 로직은 리듀서 함수에서만 존재하기 때문
  // 단점 : 문법이 어렵다

  const [count, countDispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <>
      <h1>Count: {count.count}</h1>
      <button onClick={() => countDispatch({ type: "decrement" })}>감소</button>
      <button onClick={() => countDispatch({ type: "reset" })}>리셋</button>
      <button onClick={() => countDispatch({ type: "increment" })}>증가</button>
    </>
  );
}
