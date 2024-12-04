import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const CountDisplay = () => {
  const { count } = useContext(CounterContext)!;
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
};

export default CountDisplay;
