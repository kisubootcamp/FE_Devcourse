import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function CountOutsideDisplay() {
  // 참고 -8
  // CounterContext에서 count를 들고 와서 사용하겠다는 것
  // null일 수도 있으니 뒤에 ! 사용하여 널 부정 해줘야 한다
  // CountButton도 사용해야 한다. 참고 -9
  const { count } = useContext(CounterContext)!;
  return (
    <div>
      <h1>outside count: {count}</h1>
    </div>
  );
}
