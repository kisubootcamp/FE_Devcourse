import { useContext } from "react";
import { CounterActionContext } from "../context/CounterContext";
export default function CountButtons() {
  console.log("CountButtons rendered");
  const { increment, decrement, reset } = useContext(CounterActionContext)!;
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
