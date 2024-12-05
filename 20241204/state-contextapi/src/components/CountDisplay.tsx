import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function CountDisplay() {
  const { count } = useContext(CounterContext)!;
  //!으로 null 부정 해 줘야 됨
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
