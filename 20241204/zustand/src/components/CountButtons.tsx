import React from "react";
import { useCountStore } from "../store/counterStore";

export default React.memo(function CountButtons() {
  console.log("CountButtons rendering");
  const plus = useCountStore((state) => state.plus);
  const minus = useCountStore((state) => state.minus);
  const reset = useCountStore((state) => state.reset);

  return (
    <>
      <button onClick={minus}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={plus}>증가</button>
    </>
  );
});
