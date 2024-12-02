import { useReducer } from "react";
import { counter2Reducer, counterReducer } from "../reducer/counterReducer";

const CountWithReducer = () => {
  const [count, countDispatch] = useReducer(counterReducer, 0);
  const [count2, count2Dispatch] = useReducer(counter2Reducer, 0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => countDispatch({ type: "decrement" })}>감소</button>
      <button onClick={() => countDispatch({ type: "reset" })}>리셋</button>
      <button onClick={() => countDispatch({ type: "increment" })}>증가</button>

      <hr />

      <h1>Count: {count2}</h1>
      <button onClick={() => count2Dispatch({ type: "decrement" })}>
        감소
      </button>
      <button onClick={() => count2Dispatch({ type: "reset" })}>리셋</button>
      <button onClick={() => count2Dispatch({ type: "increment" })}>
        증가
      </button>
    </>
  );
};

export default CountWithReducer;
