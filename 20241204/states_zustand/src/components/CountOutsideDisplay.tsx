import { useCounterStore } from "../store/couterStore";

export default function CountOutsideDisplay() {
  const count = useCounterStore((state) => state.count);
  return (
    <div>
      <h1>outside count: {count}</h1>
    </div>
  );
}
