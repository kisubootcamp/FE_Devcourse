export function reducer(state: ReducerState, { type }: ReducerAction) {
  if (type === "decrement") return { ...state, count: state.count - 1 };
  else if (type === "increment") return { ...state, count: state.count + 1 };
  else if (type === "reset") return { ...state, count: 0 };
  else return state; // 아무런 조작하지 않겠다.
}
