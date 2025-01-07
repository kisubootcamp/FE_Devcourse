import { useReducer } from "react";
import { reducer } from "../reducer/countReducer";

export default function ReducerPractice() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [state2, dispatch2] = useReducer(reducer2, { count: 0 });

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "decrement" })}>감소</button>
      <button onClick={() => dispatch({ type: "reset" })}>리셋</button>
      <button onClick={() => dispatch({ type: "increment" })}>증가</button>
    </>
  );
}
