export const reducer = (count: reducerState, action: reducerAction) => {
  switch (action.type) {
    case "decrement":
      return count - 1;
    case "increment":
      return count + 1;
    case "reset":
      return 0;
    default:
      return count;
  }
  // 리듀서 함수는 아무튼 어떤 값을 리턴해야 한다. 때문에 아무런 상태 변화가 감지되지 않을 때 기본값을 반환하는 식을 항상 명시해주어야 한다.
};
