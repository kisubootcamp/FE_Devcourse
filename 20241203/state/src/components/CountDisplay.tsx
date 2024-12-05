import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function CountDisplay() {
  const { count } = useContext(CounterContext)!;
  console.log("d");

  return <div>Count: {count}</div>;
}
