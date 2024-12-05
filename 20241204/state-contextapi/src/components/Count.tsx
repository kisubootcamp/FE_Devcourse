import { useContext, useEffect } from "react";
import { CounterActionContext } from "../context/CounterContext";
import CountDetail from "./CountDetail";

export default function Count() {
  const { reset } = useContext(CounterActionContext)!;
  useEffect(() => {
    return () => {
      reset();
    };
  }, []);
  return <CountDetail />;
}
