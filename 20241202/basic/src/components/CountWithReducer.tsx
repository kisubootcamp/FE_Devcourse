// import React, { useReducer } from "react";

// // reducer 함수 : useReducer 훅으로 정의한 상태가 업데이트 되는 로직이 담긴함수, 무조건 매개변수를 두개 전달받음
// // 반드시 상태를 반환해야함 즉 값을 무조건 반환해야함 
// // action : 리듀서 함수내에서 상태를 업데이트 할 때 참조할수 있는 값(보틍은 객체로 지정함, 형식은 자유로움)
// // function reducer (스테이트, 액션) { 상태를 조작하는 로직 }

// type ReducerState = number;
// type ReducerAction = string;

// function reducer(state: ReducerState, action: ReducerAction) {
//   if (action === "decrement") return state - 1;
//   else if (action === "increment") return state + 1;
//   else if (action === "reset") return 0;
//   else return state; //아무조작도 하지않겠다. 무조건 반환하는 값은 있어야함
// }

// // useReducer 훅
// export default function CountWithReducer() {
//   // useReducer 혹은 로컬 상태를 정의할 떄 사용
//   // useState와 비슷
//   // const [상태(state), 액션발생함수(dispatch)] = useReducer(리듀서함수, 초깃값)
//   // 리듀서 함수 : 상태를 업데이트(변경)하는 로직을 수행하는 함수
//   // 장점 : 상태 업데이트가 예측 가능함 왜 상태 업데이트하는 로직이 리듀서 함수에서만 존재하기 떄문임
//   // 단점 : 문법이 어렵다
//   const [state, dispatch] = useReducer(reducer, 0);
//   return (
//     <>
//       <h1>Count:{state} </h1>
//       <button onClick={() => dispatch("decrement")}>감소</button>
//       <button onClick={() => dispatch("reset")}>리셋</button>
//       <button onClick={() => dispatch("increment")}>증가</button>
//     </>
//   );
// }

// import { useReducer } from "react";

// type ReducerState = {
//   count: number;
// };
// type ReducerAction = {
//   type: string
// };

// // useReducer 훅으로 정의한 상태가 업데이트 되는 로직이 담긴 함수
// // 값을 무조건 반환해야 함.
// // 리듀서 함수 내에서 상태를 업데이트 할 때 참조할 수 있는 값 (객체, )
// function reducer(state: ReducerState, action: ReducerAction) {
//   if (action.type === "decrement") return {...state, count: state.count -1};
//   else if (action.type === "increment") return {...state, count: state.count + 1};
//   else if (action.type === "reset") return  {...state, count: 0};
//   else return state; // 아무런 조작하지 않겠다.
// }

// export default function CountWithReducer() {
//   // useReducer 훅
//   // useReducer 훅은 로컬 상태를 정의할 때 사용해요.
//   // useState와 비슷합니다.
//   // const [상태(state), 상태업데이트함수(setState)] = useState(초깃값);

//   // 리듀서 함수 -> 상태를 업데이트(변경)하는 로직을 수행하는 함수
//   // 잠점 : 상태 업데이트가 예측 가능해요. 왜? 상태 업데이트하는 로직 리듀서 함수에서만 존재할 수 있다.
//   // 단점 : 문법이 어렵다
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <>
//       <h1>Count: {state}</h1>
//       <button onClick={() => dispatch({ type: "decrement" })}>감소</button>
//       <button onClick={() => dispatch({ type: "reset" })}>리셋</button>
//       <button onClick={() => dispatch({ type: "increment" })}>증가</button>
//     </>
//   );
// }

import { useReducer } from "react";

// useReducer 훅으로 정의한 상태가 업데이트 되는 로직이 담긴 함수
// 값을 무조건 반환해야 함.
// 리듀서 함수 내에서 상태를 업데이트 할 때 참조할 수 있는 값 (객체, )
import { countReducer, count2Reducer } from "../reducer/countReducer"

export default function CountWithReducer() {
  // useReducer 훅
  // useReducer 훅은 로컬 상태를 정의할 때 사용해요.
  // useState와 비슷합니다.

  // const [상태(state), 액션발생함수(dispatch)] = useReducer(리듀서함수, 초깃값)
  // 리듀서 함수 -> 상태를 업데이트(변경)하는 로직을 수행하는 함수
  // 장점 : 상태 업데이트가 예측 가능해요. 왜? 상태 업데이트하는 로직 리듀서 함수에서만 존재할 수 있다.
  // 단점 : 문법이 어렵다

  // 하나의 상태당 1개의 reducer 훅임 -> 변수의 식별자의 이름과 비슷하게 지음
  const [count, countDispatch] = useReducer(countReducer, 0);
  const [count2, count2Dispatch] = useReducer(count2Reducer, 0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => countDispatch({ type: "decrement" })}>감소</button>
      <button onClick={() => countDispatch({ type: "reset" })}>리셋</button>
      <button onClick={() => countDispatch({ type: "increment" })}>증가</button>
    </>
  );
}
