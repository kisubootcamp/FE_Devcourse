import React from "react";
import { useCounterStore } from "../store/counterStore";

export default React.memo(function CountButtons() {
  console.log("CountButtons rendering");
  const increment = useCounterStore((state) => state.increment);
  const reset = useCounterStore((state) => state.reset);
  const decrement = useCounterStore((state) => state.decrement);
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
    </>
  );
});
