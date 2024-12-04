import { useEffect } from "react";
import CountDetail from "./CountDetail";
import { useCounterStore } from "../store/couterStore";

export default function Count() {
  const reset = useCounterStore((state) => state.reset);
  useEffect(() => {
    reset();
  }, []);
  return <CountDetail />;
}
