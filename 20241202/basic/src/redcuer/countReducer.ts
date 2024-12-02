export function countReducer(count: ReducerState, action: ReducerAction) {
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

export function count2Reducer(count: ReducerState, action: ReducerAction) {
  if (action.type === "decrement") return count - 1;
  else if (action.type === "increment") return count + 1;
  else if (action.type === "reset") return 0;
  else return count; // 아무런 조작하지 않겠다.
}
