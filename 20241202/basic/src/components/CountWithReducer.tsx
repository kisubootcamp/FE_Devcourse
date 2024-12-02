import { useReducer } from "react";
import { count2Reducer, countReducer } from "../redcuer/countReducer";

// useReducer 훅으로 정의한 상태가 업데이트 되는 로직이 담긴 함수
// 무조건 두개 전달받는다.
// reducer은 값(상태)을 무조건 반환해야 한다.

// action은 리듀서 함수 내에서 상태를 업데이트 할 때 참조할 수 있는 값(객체,{type:'...',payload:'...'})

// dispatch 어떻게 작동할지에 대한 내용
// const dispatch = (action) => {
//   //...
//   reducer(최신상태값, action);
// };

export default function CountWithReducer() {
  // dispatch를 이용해서 action을 발생시킨다.
  const [count, countDispatch] = useReducer(countReducer, 0);
  const [count2, count2Dispatch] = useReducer(count2Reducer, 0);

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => countDispatch({ type: "decrement" })}>감소</button>
      <button onClick={() => countDispatch({ type: "reset" })}>리셋</button>
      <button onClick={() => countDispatch({ type: "increment" })}>증가</button>

      <h1>Count : {count2}</h1>
      <button onClick={() => count2Dispatch({ type: "decrement" })}>
        감소
      </button>
      <button onClick={() => count2Dispatch({ type: "reset" })}>리셋</button>
      <button onClick={() => count2Dispatch({ type: "increment" })}>
        증가
      </button>
    </>
  );
}
