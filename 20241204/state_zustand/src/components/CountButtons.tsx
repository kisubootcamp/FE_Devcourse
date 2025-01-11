import React from "react";
import { useCountStore } from "../store/counterStore";

export default React.memo(function CountButtons() {
  console.log("CountButtons rendering");
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);
  const reset = useCountStore((state) => state.reset);
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
    </>
  );
});
ㅇ;
