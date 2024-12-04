import { useEffect } from "react";
import { useCountStore } from "../store/counterStore";

export default function CountDisplay() {
  const count = useCountStore((state) => state.count);
  const reset = useCountStore((state) => state.reset);
  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  return (
    <>
      <h1>Count:{count}</h1>
    </>
  );
}
