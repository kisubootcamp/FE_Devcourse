import { useReducer } from "react";

type ReducerState = number;
type ReducerAction = string;

//리듀서 함수는 컴포넌트 외부에 보통 선언한다.
// useReducer 훅으로 정의한 상태가 업데이트 되는 로직이 담긴 함수
// function reducer(스테이트, 액션){} 무조건 매개변수를 2개(상태(state), 액션) 전달 받음
// action은 리듀서 함수 내에서 상태를 업데이트할 때 참조할 수 있는 값 (보통은 객체로 지정)
function reducer(state: ReducerState, action: ReducerAction) {
  //반드시 상태(값)을 반환해야 한다. (여기서 반환되는 값이 useReducer의 state값이 되기 때문)
  if (action === "decrement") return state - 1;
  else if (action === "increment") return state + 1;
  else if (action === "reset") return 0;
  // else여도 뭐라도 return 값 필요 (return state=> 아무런 조작 없이 반환하겠다는 뜻)
  else return state;
}

/* dispatch 작동 원리 생각해보자면... 
const dispatch = (action)=>{
 /...
 reducer(최신 상태값, action)
} */

export default function CountWithReducer() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1> Count: {state}</h1>
      <button onClick={() => dispatch("decrement")}> 감소</button>
      <button onClick={() => dispatch("reset")}> 리셋</button>
      <button onClick={() => dispatch("increment")}> 증가</button>
    </>
  );
}
