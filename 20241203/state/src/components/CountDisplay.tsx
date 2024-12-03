import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function CountDisplay() {
  // CounterContext에서 데이터를 가져오겠다.
  const { count } = useContext(CounterContext)!;
  return (
    <>
      <h1>Count : {count}</h1>
    </>
  );
}
