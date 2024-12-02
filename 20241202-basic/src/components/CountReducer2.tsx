import { useReducer } from 'react';

type ReducerState = { count: number };
type ReducerAction = { type: string };

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
  if (action.type === 'decrement') return { count: state.count - 1 };
  else if (action.type === 'increment') return { count: state.count + 1 };
  else if (action.type === 'reset') return { count: 0 };
  else return { count: state.count };
};

export default function CountReducer2() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'decrement' })}>감소</button>
      <button onClick={() => dispatch({ type: 'reset' })}>리셋</button>
      <button onClick={() => dispatch({ type: 'increment' })}>증가</button>
    </>
  );
}
