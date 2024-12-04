import { useContext, useEffect } from "react";
import CountDetail from "./CountDetail";
import { CounterActionContext } from "../context/CounterContext";

export default function Count() {
  const { reset } = useContext(CounterActionContext)!;
  useEffect(() => {
    // 클린업(clean-up)
    return () => {
      reset();
    };
  }, []);
  return <CountDetail />;
}
