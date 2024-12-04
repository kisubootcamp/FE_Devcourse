import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import {
  increment,
  incrementByAmount,
  reset,
} from "../store/slice/counterSlice";

export default React.memo(function CountButtons() {
  console.log("CountButtons rendering");
  // const [count, dispatch] = useReducer(reducer, {count: 0})

  // dispatch({type: 'increment', payload: 20})

  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <button onClick={() => dispatch({ type: "counterSlice/decrement" })}>
        감소
      </button>
      <button onClick={() => dispatch(reset())}>리셋</button>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button
        onClick={() =>
          dispatch({
            type: "counterSlice/incrementByAmount",
            payload: {
              cccc: 50,
            },
          })
        }
      >
        10씩 증가
      </button>
      <button onClick={() => dispatch(incrementByAmount({ cccc: 100 }))}>
        10씩 증가
      </button>
    </>
  );
});
