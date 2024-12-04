import { useContext } from "react";
import CompoB from "./CompoB";
import { CounterContext } from "../context/CounterContext";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function CompoA() {
  // const { count } = useContext(CounterContext)!;
  const count = useSelector((state: RootState) => state.counter.count);
  console.log("A rendering");
  return (
    <>
      <h1>A</h1>
      <div>
        <div>{count}</div>
      </div>
      <CompoB />
    </>
  );
}
