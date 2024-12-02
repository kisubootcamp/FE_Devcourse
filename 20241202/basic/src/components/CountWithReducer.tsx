import { useReducer } from "react";

// ======= 1 =======
// type ReducerState = number; // 상태의 타입을 정의 => 가독성을 높이기 위해 타입 별칭 사용
// type ReducerAction = string; // 액션의 타입을 정의 => 가독성을 높이기 위해 타입 별칭 사용

// function reducer(state: ReducerState, action: ReducerAction) {
//   if (action === "INCREMENT") return state + 1;
//   else if (action === "DECREMENT") return state - 1;
//   else if (action === "RESET") return 0;
//   else return state;
// }
// export default function CountWithReducer() {
//   // useReducer를 사용하여 상태 업데이트 로직을 수행하는 함수
//   const [state, dispatch] = useReducer(reducer, 0);
//   return (
//     <>
//       <h1>count :{state}</h1>
//       <button onClick={() => dispatch("INCREMENT")}>Increment</button>
//       <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
//       <button onClick={() => dispatch("RESET")}>Reset</button>
//     </>
//   );
// }

// ======= 2 =======
// reducer, type을 다른 파일로 분리
import { counterReducer } from "../reducer/countReducer";
export default function CountWithReducer() {
  const [count, countDispatch] = useReducer(counterReducer, 0);
  // const [count2, countDispatch2] = useReducer(counter2Reducer, 0); // 다른 reducer를 사용할 때

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => countDispatch({ type: "decrement" })}>감소</button>
      <button onClick={() => countDispatch({ type: "reset" })}>리셋</button>
      <button onClick={() => countDispatch({ type: "increment" })}>증가</button>
    </>
  );
}
