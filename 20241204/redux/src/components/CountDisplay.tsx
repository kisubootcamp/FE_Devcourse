import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function CountDisplay() {
  // store에 있는reducer에 접근할수있다.
  const count = useSelector((state: RootState) => state.counter.count);
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
