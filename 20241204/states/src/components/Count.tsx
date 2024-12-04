import { CounterActionContext } from "../context/CounterContext";
import CountDetail from "./CountDetail";
import { useContext, useEffect } from "react";
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
