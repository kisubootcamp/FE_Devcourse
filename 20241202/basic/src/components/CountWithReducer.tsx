// useReducer hook
// useReducer hook => 로컬 상태를 정의할 때 사용됨
// useState와 비슷함
// const [state(상태), dispatch(액션발생함수)] = useReducer(리듀서함수, 초깃값)
// 리듀서 함수 => 상태를 업데이트하는 로직을 수행하는 함수
// action => 리듀서 함수 내에서 상태를 업데이트 할 때 참조할 수 있는 값(보통은 객체임)
import { useReducer } from "react";
import { reducer } from "../reducer/countReducer";

export default function CounterWhithReducer() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "decrement" })}>감소</button>
      <button onClick={() => dispatch({ type: "increment" })}>증가</button>
      <button onClick={() => dispatch({ type: "reset" })}>리셋</button>
    </>
  );
}
