import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { minus, plus, reset } from "../store/slice/counterSlice";

export default React.memo(function CountButtons() {
  console.log("CountButtons rendering");
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <button onClick={() => dispatch(minus())}>감소</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
      <button onClick={() => dispatch(plus())}>증가</button>
      <button
        onClick={() =>
          dispatch({ type: "counterSlice/plusByAmount", payload: 10 })
        }
      >
        10증가
      </button>
    </>
  );
});
