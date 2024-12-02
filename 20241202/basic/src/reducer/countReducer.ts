// useReducer 훅으로 정의한 상태가 업데이트 되는 로직이 담긴 함수
// 값을 무조건 반환해야함
// 리듀서 함수 내에서 상태를 업데이트 할 때 참조할 수 있는 값(객체, )
export function reducer(state: ReducerState, action: ReducerAction) {
  if (action.type === "decrement") return state - 1;
  else if (action.type === "increment") return state + 1;
  else if (action.type === "reset") return 0;
  else return state; // 아무런 조작하지 않겠다
}
