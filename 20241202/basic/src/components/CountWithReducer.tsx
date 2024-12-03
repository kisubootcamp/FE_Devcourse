import { useReducer, useState } from "react";
import { reducer } from "../reducer/countReducer";

export default function CountWithRenducer() {
  // useReducer 훅
  // useReducer 훅은 로컬 상태를 정의할 때 사용
  // useState와 비슷
  //   const [상태(state), 상태업데이트함수(setState)] = useState(초깃값);

  // 리듀서 함수 -> 상태를 업데이트(변경)하는 로직을 수행하는 함수
  // 장점: 상태 업데이트가 예측 가능하다. 상태 업데이트하는 로직 리듀서 함수에서만 존재할 수 있다.
  // 단점 : 문법이 어렵다
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>Count: {state}</h1>
      <button onClick={() => dispatch({ type: "decrement" })}>감소</button>
      <button onClick={() => dispatch({ type: "reset" })}>리셋</button>
      <button onClick={() => dispatch({ type: "increment" })}>증가</button>
    </>
  );
}
