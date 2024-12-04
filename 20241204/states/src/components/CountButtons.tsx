import React, { useContext } from "react";
import {
  CounterActionContext,
  CounterContext,
} from "../context/CounterContext";

export default React.memo(function CountButtons() {
  // 왜  리렌더링 되지??

  console.log("CountButtons rendering");

  // useContext hook을 사용해서 컨텍스트 객체 Provider의 데이터에 접근할 수 있다.
  const { increment, decrement, reset } = useContext(CounterActionContext)!;

  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
    </>
  );
});
