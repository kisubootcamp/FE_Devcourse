import { useEffect } from "react";
import { useCounterStore } from "../store/counterStore";
import CountButtons from "./CountButtons";
import CountDisplay from "./CountDisplay";

export default function CountDetail() {
  const reset = useCounterStore((state) => state.reset);
  useEffect(() => {
    return () => {
      reset();
    };
  }, []);
  return (
    <>
      <CountDisplay />
      <CountButtons />
    </>
  );
}
