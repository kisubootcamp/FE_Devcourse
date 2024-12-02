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

export function counter2Reducer(count: ReducerState, action: ReducerAction) {
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
