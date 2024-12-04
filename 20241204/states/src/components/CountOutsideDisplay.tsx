import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function CountOutsideDisplay() {
  const { count } = useContext(CounterContext)!;
  return (
    <>
      <h1>OutSide Count: {count}</h1>
    </>
  );
}
