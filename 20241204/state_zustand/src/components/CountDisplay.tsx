import { useCountStore } from "../store/counterStore";

export default function CountDisplay() {
  const count = useCountStore((state) => state.count);
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
