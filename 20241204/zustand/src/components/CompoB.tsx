import React from "react";
import { useCounterStore } from "../store/counterStore";
import CompoC from "./CompoC";

export default React.memo(function CompoB() {
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);
  const reset = useCounterStore((state) => state.reset);

  console.log("B rendering");
  return (
    <>
      <h1>B</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <button onClick={reset}>리셋</button>
      <CompoC />
    </>
  );
});
