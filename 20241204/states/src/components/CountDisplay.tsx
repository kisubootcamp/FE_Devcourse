import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function CountDisplay() {
  console.log("CountDisplay rendering");

  const count = useContext(CounterContext)?.count;
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
