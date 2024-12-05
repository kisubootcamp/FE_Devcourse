import { useContext } from "react";
import { CounterActionContext } from "../context/CounterContext";

export default function CountButtons() {
  const { decrement, increment, reset } = useContext(CounterActionContext)!;
  return (
    <div>
      <button onClick={decrement}>감소</button>
      <button onClick={increment}>증가</button>
      <button onClick={reset}>리셋</button>
    </div>
  );
}
