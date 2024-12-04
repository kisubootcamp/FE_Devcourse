import React, { useContext } from "react";
import CompoC from "./CompoC";
import { CounterActionContext } from "../context/CounterContext";

export default React.memo(function CompoB() {
  const { increment, decrement, reset } = useContext(CounterActionContext)!;
  console.log("B rendering");
  return (
    <>
      <h1>B</h1>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <CompoC />
    </>
  );
});
