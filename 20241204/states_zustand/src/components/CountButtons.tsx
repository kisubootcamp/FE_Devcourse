import React from "react";
import { useCounterStore } from "../store/CounterStore";

export default React.memo(function CountButtons() {
  const { increment, decrement, reset } = useCounterStore((state) => state);
  console.log("CountButtons rendering");
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
    </>
  );
});
