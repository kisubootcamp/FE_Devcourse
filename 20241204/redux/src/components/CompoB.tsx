import React, { useContext } from "react";
import CompoC from "./CompoC";
import { CounterActionContext } from "../context/CounterContext";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import {
  decreament,
  increament,
  increamentByAmount,
  reset,
} from "../store/CounterSlice";

export default React.memo(function CompoB() {
  // const { increment, decrement, reset } = useContext(CounterActionContext)!;
  const dispatch = useDispatch<AppDispatch>();
  console.log("B rendering");
  return (
    <>
      <h1>B</h1>
      <button onClick={() => dispatch(increament())}>증가</button>
      <button onClick={() => dispatch(increamentByAmount(10))}>10증가</button>
      <button onClick={() => dispatch(decreament())}>감소</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
      <CompoC />
    </>
  );
});
