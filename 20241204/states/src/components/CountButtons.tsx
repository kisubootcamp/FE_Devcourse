import React from "react";
import { useContext } from "react";
import { CounterActionContext } from "../context/CounterContext";
export default React.memo(function CountButtons() {
  console.log("CountButtons rendering");
  const { increment, decrement, reset } = useContext(CounterActionContext)!;
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
    </>
  );
});
