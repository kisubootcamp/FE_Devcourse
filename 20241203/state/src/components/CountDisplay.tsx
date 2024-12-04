import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function CountDisplay() {
  const { count } = useContext(CounterContext)!;

  console.log("countDisplay rendering");

  return (
    <>
      <h1>Count:{count}</h1>
    </>
  );
}
