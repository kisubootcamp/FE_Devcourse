// export function counterReducer(count: ReducerState, action: ReducerAction) {
//   if (action.type === "decrement") return count - 1;
//   else if (action.type === "increment") return count + 1;
//   else if (action.type === "reset") return 0;
//   else return count; // 아무런 조작하지 않겠다.
// }

//switch문으로 변경 -> 코드 가독성을 높이기 위해
export function counterReducer(count: ReducerState, action: ReducerAction) {
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
}
