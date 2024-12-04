import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function CountOutsideDisplay() {
  const count = useSelector((state: RootState) => state.counter.count);
  return (
    <div>
      <h1>outside count: {count}</h1>
    </div>
  );
}
