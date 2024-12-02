import { useReducer } from 'react';

type ReducerState = number;
type ReducerAction = string;

// 리듀서 함수는 보통 컴포넌트 외부에 선언
// useReducer 훅으로 정의된 상태가 업데이트 되는 로직이 담긴 함수
// 무조건 매개변수를 두 개 전달 받음(state, action)
// action : 리듀서 함수 내에세 상태를 업데이트 할 때 참조할 수 있는 값(보통은 객체로 지정)
const reducer = (count: ReducerState, action: ReducerAction) => {
  // 리듀서함수는 반드시 상태(값)를 하나 이상 반환해야 함
  // 반환 값이 새로운 상태가 되기 때문

  if (action === 'decrement') return count - 1;
  if (action === 'increment') return count + 1;
  else if (action === 'reset') return 0;
  else return count; // 아무런 조작을 하지 않겠다
};

export default function CountReducer() {
  // useReducer 훅
  // 로컬 상태를 정의할 때 사용
  // const [상태(state), 액션발생함수(dispatch)] = useReducer(리듀서함수, 초기값)
  // 리듀서함수는 상태를 업데이트(변경)하는 로직을 수행
  // 장점 : 상태 업데이트가 예측 가능 -> 상태 업데이트 로직은 리듀서 함수에서만 존재 가능하기 때문
  // 단점 : 문법이 어려움

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch('decrement')}>감소</button>
      <button onClick={() => dispatch('reset')}>리셋</button>
      <button onClick={() => dispatch('increment')}>증가</button>
    </>
  );
}
