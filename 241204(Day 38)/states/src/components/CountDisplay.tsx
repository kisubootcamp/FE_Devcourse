import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function CountDisplay() {
  // 참고 -7
  // CounterContext에서 count를 들고 와서 사용하겠다는 것
  // null일 수도 있으니 뒤에 ! 사용하여 널 부정 해줘야 한다
  // CountOutsideDisplay에서도 들고 와야한다 참고 -8
  const { count } = useContext(CounterContext)!;
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
