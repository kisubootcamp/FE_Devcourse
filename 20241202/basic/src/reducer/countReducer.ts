export default function reducer(state: ReducerState, action: ReducerAction) {
  switch (action.type) {
    case "decrement":
      return state - 1;
    case "increment":
      return state + 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}
