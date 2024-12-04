import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function CountDisplay() {
  const { count } = useContext(CounterContext)!;
  return (
    <>
      <h1>count: {count}</h1>
    </>
  );
}
