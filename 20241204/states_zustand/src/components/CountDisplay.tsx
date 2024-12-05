import { useCounterStore } from "../store/counterStore";

export default function CountDisplay() {
  // useCounterStore 사용자 정의 hook에서  상태중 count를 받아오겠다.
  const count = useCounterStore((state) => state.count);
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
