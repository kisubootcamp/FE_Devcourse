import { useSelector } from "react-redux";

// import 할때 반드시 내가 정의한 RootState 타입을 가져와야함.
import { RootSate } from "../store/store";

export default function CountOutsideDisplay() {
  const count = useSelector((state: RootSate) => state.counter.count);
  return (
    <div>
      <h1>outside count: {count}</h1>
    </div>
  );
}
