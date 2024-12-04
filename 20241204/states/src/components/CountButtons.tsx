import React, { useContext } from "react";
import { CounterActionContext } from "../context/CounterContext";

export default React.memo(function CountButtons() {
  const { plus, minus, reset } = useContext(CounterActionContext)!;

  console.log("CountButtons rendering");
  return (
    <>
      <button onClick={minus}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={plus}>증가</button>
    </>
  );
});
