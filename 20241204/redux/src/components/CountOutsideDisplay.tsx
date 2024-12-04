import { RootState } from "../store/store";
import { useSelector } from "react-redux";

export default function CountOutsideDisplay() {
  const count = useSelector((state: RootState) => state.counter.count);
  return (
    <div>
      <h1>outside count: {count}</h1>
    </div>
  );
}
