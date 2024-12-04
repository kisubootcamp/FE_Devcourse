import { useContext } from "react";
import CompoB from "./CompoB";
import { CounterContext } from "../context/CounterContext";

export default function CompoA() {
  const { count } = useContext(CounterContext)!;
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
