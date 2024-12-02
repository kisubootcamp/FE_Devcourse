// 보통 리듀서 함수는 외부에다 선언
// 값을 무조건 반환해야함 반환하는 값이 새로운 상태값이 된다.
// reducer함수 내에서 상태를 업데이트 할 때 참조할 수 있는 값(객체)

export const counterReducer = (count: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case "decrement":
      return { ...count, count: count.count - 1 };
    case "increment":
      return { ...count, count: count.count + 1 };
    case "reset":
      return { ...count, count: 0 };
    default:
      return count;
  }
};
