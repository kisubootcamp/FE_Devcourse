import { useContext, useEffect } from "react";
import CountDetail from "./CountDetail";
import { CounterActionContext } from "../context/CounterContext";

export default function Count() {
  const { reset } = useContext(CounterActionContext)!;
  useEffect(() => {
    reset();
  }, []);

  return <CountDetail />;
}
