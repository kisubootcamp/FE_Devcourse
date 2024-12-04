import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const CountOutsideDisplay = () => {
  const { count } = useContext(CounterContext)!;
  return (
    <>
      <h1>OutSide Count: {count}</h1>
    </>
  );
};

export default CountOutsideDisplay;
