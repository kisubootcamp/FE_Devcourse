import { useReducer } from "react";
import { countReducer } from "./reducer/countReducer";

export default function CountWithReducer() {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "decrement" })}>감소</button>
      <button onClick={() => dispatch({ type: "reset" })}>리셋</button>
      <button onClick={() => dispatch({ type: "increment" })}>증가</button>
    </>
  );
}
