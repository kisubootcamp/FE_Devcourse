import { useReducer } from "react";
import { reducer } from "../reducer/CountReducer";

// useReducer 훅으로 정의한 상태가 업데이트 되는 로직이 담긴 함수
// 값을 무조건 반환해야 함.
// 리듀서 함수 내에서 상태를 업데이트 할 때 참조할 수 있는 값 (객체, )

export default function Count() {
  // useReducer 훅
  // useReducer 훅은 로컬 상태를 정의할 때 사용해요.
  // useState와 비슷합니다.
  // const [상태(state), 상태업데이트함수(setState)] = useState(초깃값);

  // 리듀서 함수 -> 상태를 업데이트(변경)하는 로직을 수행하는 함수
  // 잠점 : 상태 업데이트가 예측 가능해요. 왜? 상태 업데이트하는 로직 리듀서 함수에서만 존재할 수 있다.
  // 단점 : 문법이 어렵다
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "decrement" })}>감소</button>
      <button onClick={() => dispatch({ type: "reset" })}>리셋</button>
      <button onClick={() => dispatch({ type: "increment" })}>증가</button>
    </>
  );
}
