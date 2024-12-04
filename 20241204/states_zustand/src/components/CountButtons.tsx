import React from "react";
import { useCounterStore } from "../store/counterStore";

export default React.memo(function CountButtons() {
  console.log("CountButtons rendering");
  // const increment = useCounterStore((state) => state.increment);
  // const decrement = useCounterStore((state) => state.decrement);
  // const reset = useCounterStore((state) => state.reset);

  const { increment, decrement, reset } = useCounterStore();

  // 비구조화 할당해서 받을 수 있는데 이 경우 불필요한 렌더링이 발생하게 된다.
  //  useCounterStore에서 비구조화할당 될때 실제로 count값도 사용하지 않을 뿐이지 받아지기 때문이다.
  //  버튼을 눌렀을때 count값이 변하기 때문에 값이 변경되었다 판단하여 리렌더링이 되는 것이다.

  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
    </>
  );
});
