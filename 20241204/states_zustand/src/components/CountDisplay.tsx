import { useCounterStore } from "../store/couterStore";

export default function CountDisplay() {
  const count = useCounterStore((state) => state.count);

  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
