import { CounterContext } from "../context/CounterContext";
import { useContext } from "react";

export default function CountOutsideDisplay() {
  const { count } = useContext(CounterContext)!;
  return (
    <div>
      <h1>outside count: {count}</h1>
    </div>
  );
}
