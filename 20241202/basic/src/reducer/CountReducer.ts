export function reducer(state: ReducerState, action: ReducerAction) {
  switch (action.type) {
    case "decrement":
      return { count: state.count - 1 };
    case "increment":
      return { count: state.count + 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}
