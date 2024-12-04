import React, { useContext } from "react";
import { CounterActionContext } from "../context/CounterContext";

export default React.memo(function CountButtons() {
  console.log("CountButton render");
  const { plus, reset, minus } = useContext(CounterActionContext)!;

  return (
    <div>
      <button onClick={plus}>증가</button>
      <button onClick={reset}>리셋</button>
      <button onClick={minus}>감소</button>
    </div>
  );
});
