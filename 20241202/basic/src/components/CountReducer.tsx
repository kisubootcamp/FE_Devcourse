import { useReducer } from "react";

interface CountReducerProps {
  type: string;
}

function countReducer(count: number, action: CountReducerProps): number {
  switch (action.type) {
    case "DECREMENT":
      return count - 1;
    case "INCREMENT":
      return count + 1;
    case "RESET":
      return 0;
    default:
      return count;
  }
}

export default function CountReducer() {
  const [count, countDispatch] = useReducer(countReducer, 0);
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => countDispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => countDispatch({ type: "RESET" })}>리셋</button>
      <button onClick={() => countDispatch({ type: "INCREMENT" })}>증가</button>
    </>
  );
}
