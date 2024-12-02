import { useReducer } from "react";
import { countReducer } from "../reducer/countReducer";

export default function CountWithReducer() {
  const [count, countDispatch] = useReducer(countReducer, 0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => countDispatch({ type: "decrement" })}>감소</button>
      <button onClick={() => countDispatch({ type: "reset" })}>리셋</button>
      <button onClick={() => countDispatch({ type: "increment" })}>증가</button>
    </>
  );
}
